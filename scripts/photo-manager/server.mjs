import { createServer } from "node:http"
import { readFile, stat } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import sharp from "sharp"
import {
  readGallery,
  saveGallery,
  scanPhotos,
  validateGallery,
  exportPhotos,
  cleanExports,
} from "./library.mjs"

const photoRoot = fileURLToPath(
  new URL("../../src/assets/life/photos/", import.meta.url),
)
const galleryPath = fileURLToPath(
  new URL("../../src/content/life-gallery.json", import.meta.url),
)
const outputDirectory = fileURLToPath(
  new URL("../../public/img/life/", import.meta.url),
)
const categories = JSON.parse(
  await readFile(
    new URL("../../src/content/life-categories.json", import.meta.url),
    "utf8",
  ),
)
const html = await readFile(new URL("./index.html", import.meta.url))
const port = Number(process.env.PHOTO_MANAGER_PORT ?? 4322)
const origin = `http://127.0.0.1:${port}`
const cache = new Map()
let saving = false

function json(response, code, value) {
  response.writeHead(code, {
    "Content-Type": "application/json; charset=utf-8",
  })
  response.end(JSON.stringify(value))
}

const server = createServer(async (request, response) => {
  response.setHeader("Cache-Control", "no-store")
  response.setHeader("X-Content-Type-Options", "nosniff")
  response.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-ancestors 'none'",
  )
  // Reject DNS rebinding and cross-origin writes to this loopback-only editor.
  if (request.headers.host !== `127.0.0.1:${port}`) {
    json(response, 403, { error: `Open ${origin} instead.` })
    return
  }
  try {
    const url = new URL(request.url, origin)
    if (request.method === "GET" && url.pathname === "/") {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
      response.end(html)
    } else if (request.method === "GET" && url.pathname === "/api/photos") {
      const [files, gallery] = await Promise.all([
        scanPhotos(photoRoot),
        readGallery(galleryPath),
      ])
      const saved = new Map(gallery.photos.map((photo) => [photo.file, photo]))
      json(response, 200, {
        categories,
        photos: files.map(({ id, file }, index) => ({
          file,
          category: null,
          caption: "",
          alt: "",
          order: index,
          hidden: false,
          ...saved.get(file),
          id,
        })),
        missing: gallery.photos
          .filter((photo) => !files.some((file) => file.file === photo.file))
          .map((photo) => photo.file),
      })
    } else if (
      request.method === "GET" &&
      /^\/image\/[a-f0-9]{64}$/.test(url.pathname)
    ) {
      const files = await scanPhotos(photoRoot)
      const photo = files.find((file) => file.id === url.pathname.slice(7))
      if (!photo) {
        json(response, 404, { error: "Photo not found." })
        return
      }
      const width = url.searchParams.get("large") === "1" ? 1600 : 480
      const info = await stat(photo.path)
      const key = `${photo.id}:${width}:${info.mtimeMs}:${info.size}`
      if (!cache.has(key)) {
        if (cache.size >= 100) cache.clear()
        cache.set(
          key,
          sharp(photo.path)
            .rotate()
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 78 })
            .toBuffer(),
        )
      }
      let buffer
      try {
        buffer = await cache.get(key)
      } catch (error) {
        cache.delete(key)
        throw error
      }
      response.writeHead(200, { "Content-Type": "image/webp" })
      response.end(buffer)
    } else if (request.method === "POST" && url.pathname === "/api/gallery") {
      if (
        request.headers.origin !== origin ||
        request.headers["content-type"] !== "application/json"
      ) {
        json(response, 403, {
          error: "Save from the local photo manager only.",
        })
        return
      }
      if (saving) {
        json(response, 409, {
          error: "A save is already in progress. Try again.",
        })
        return
      }
      saving = true
      try {
        const chunks = []
        let size = 0
        for await (const chunk of request) {
          size += chunk.length
          if (size > 1024 * 1024) throw new Error("Gallery is too large.")
          chunks.push(chunk)
        }
        const value = JSON.parse(Buffer.concat(chunks).toString("utf8"))
        const files = await scanPhotos(photoRoot)
        const gallery = await exportPhotos(
          validateGallery(value, files, categories),
          files,
          outputDirectory,
        )
        await saveGallery(galleryPath, gallery)
        await cleanExports(gallery, files, outputDirectory)
        json(response, 200, { saved: gallery.photos.length })
      } finally {
        saving = false
      }
    } else json(response, 404, { error: "Not found." })
  } catch (error) {
    json(response, 400, {
      error: error instanceof Error ? error.message : "Request failed.",
    })
  }
})
server.on("error", (error) => {
  console.error(error.message)
  process.exitCode = 1
})
server.listen(port, "127.0.0.1", () => {
  console.log(
    `Photo manager: ${origin}\nStop with Ctrl+C. Website preview: pnpm dev (another terminal).`,
  )
})
