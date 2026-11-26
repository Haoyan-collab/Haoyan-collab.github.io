import {
  readdir,
  readFile,
  writeFile,
  rename,
  mkdir,
  rm,
} from "node:fs/promises"
import { join, relative, resolve } from "node:path"
import { createHash, randomUUID } from "node:crypto"
import sharp from "sharp"

// Do not retain Windows file handles after image processing.
sharp.cache({ files: 0 })

export const PHOTO_PATTERN = /\.(jpe?g|png|webp|avif)$/i

export async function scanPhotos(directory) {
  const result = []
  async function walk(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const path = join(current, entry.name)
      if (entry.isDirectory()) await walk(path)
      else if (entry.isFile() && PHOTO_PATTERN.test(entry.name)) {
        const file = relative(directory, path).replaceAll("\\", "/")
        result.push({
          id: createHash("sha256").update(file).digest("hex"),
          file,
          path,
        })
      }
    }
  }
  await walk(resolve(directory))
  return result.sort((a, b) =>
    a.file.localeCompare(b.file, "en", { numeric: true }),
  )
}

export async function readGallery(path) {
  return JSON.parse(await readFile(path, "utf8"))
}

export function validateGallery(value, files, categories) {
  if (value?.version !== 1 || !Array.isArray(value.photos))
    throw new Error("Invalid gallery format.")
  const available = new Set(files.map((photo) => photo.file))
  const allowedCategories = new Set(categories.map((category) => category.id))
  const seen = new Set()
  const photos = value.photos.map((photo) => {
    if (!photo || !available.has(photo.file) || seen.has(photo.file))
      throw new Error(
        "A photo is missing, duplicated, or outside the photo folder.",
      )
    seen.add(photo.file)
    if (photo.category !== null && !allowedCategories.has(photo.category))
      throw new Error("Unknown category.")
    if (
      typeof photo.caption !== "string" ||
      photo.caption.length > 500 ||
      typeof photo.alt !== "string" ||
      photo.alt.length > 500 ||
      typeof photo.hidden !== "boolean" ||
      !Number.isSafeInteger(photo.order) ||
      photo.order < 0 ||
      photo.order > 100000
    )
      throw new Error("Invalid photo details.")
    return {
      file: photo.file,
      category: photo.category,
      caption: photo.caption.trim(),
      alt: photo.alt.trim(),
      order: photo.order,
      hidden: photo.hidden,
    }
  })
  return { version: 1, photos }
}

export async function saveGallery(path, gallery) {
  const temporary = `${path}.${randomUUID()}.tmp`
  await writeFile(temporary, `${JSON.stringify(gallery, null, 2)}\n`, "utf8")
  await rename(temporary, path)
}

// Only selected photos are exported. Sharp also removes source EXIF metadata.
export async function exportPhotos(gallery, files, outputDirectory) {
  await mkdir(outputDirectory, { recursive: true })
  const available = new Map(files.map((photo) => [photo.file, photo]))
  for (const photo of gallery.photos) {
    if (!photo.category || photo.hidden) continue
    const source = available.get(photo.file)
    const info = await sharp(source.path)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(join(outputDirectory, `${source.id}.webp`))
    await sharp(source.path)
      .rotate()
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(join(outputDirectory, `${source.id}-small.webp`))
    photo.image = `/img/life/${source.id}.webp`
    photo.width = info.width
    photo.height = info.height
  }
  return gallery
}

export async function cleanExports(gallery, files, outputDirectory) {
  const active = new Set()
  for (const photo of gallery.photos) {
    if (!photo.category || photo.hidden) continue
    const source = files.find((file) => file.file === photo.file)
    active.add(`${source.id}.webp`)
    active.add(`${source.id}-small.webp`)
  }
  // Delete only manager-generated filenames inside its dedicated output folder.
  for (const entry of await readdir(outputDirectory, { withFileTypes: true })) {
    if (
      entry.isFile() &&
      /^[a-f0-9]{64}(-small)?\.webp$/.test(entry.name) &&
      !active.has(entry.name)
    )
      await rm(join(outputDirectory, entry.name))
  }
}
