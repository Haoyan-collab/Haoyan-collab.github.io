import { test } from "node:test"
import assert from "node:assert/strict"
import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises"
import { tmpdir } from "node:os"
import { join, dirname } from "node:path"
import sharp from "sharp"
import {
  scanPhotos,
  validateGallery,
  saveGallery,
  readGallery,
  exportPhotos,
  cleanExports,
} from "../scripts/photo-manager/library.mjs"

const categories = [{ id: "trip" }, { id: "college" }, { id: "us" }]
const record = (file, changes = {}) => ({
  file,
  category: "trip",
  caption: "A moment",
  alt: "A photo",
  order: 0,
  hidden: false,
  ...changes,
})

void test("gallery rejects traversal, duplicates, invalid categories and invalid ordering", () => {
  const files = [{ file: "photo.jpg" }]
  for (const photos of [
    [record("../outside.jpg")],
    [record("photo.jpg"), record("photo.jpg")],
    [record("photo.jpg", { category: "other" })],
    [record("photo.jpg", { order: 1.5 })],
  ])
    assert.throws(() =>
      validateGallery({ version: 1, photos }, files, categories),
    )
})

void test("Chinese nested filenames round-trip; only visible assigned photos export; hiding cleans generated images", async () => {
  const root = await mkdtemp(join(tmpdir(), "life-gallery-"))
  try {
    const source = join(root, "photos")
    await mkdir(join(source, "travel"), { recursive: true })
    const original = await sharp({
      create: { width: 120, height: 80, channels: 3, background: "purple" },
    })
      .jpeg()
      .toBuffer()
    for (const name of ["travel/照片.jpg", "hidden.jpg", "unassigned.jpg"])
      await writeFile(join(source, name), original)
    const files = await scanPhotos(source)
    assert.equal(files.length, 3)
    assert.equal(new Set(files.map((file) => file.id)).size, 3)
    const input = {
      version: 1,
      photos: [
        record("travel/照片.jpg"),
        record("hidden.jpg", { hidden: true }),
        record("unassigned.jpg", { category: null }),
      ],
    }
    const gallery = validateGallery(input, files, categories)
    const output = join(root, "export")
    await exportPhotos(gallery, files, output)
    const manifest = join(root, "gallery.json")
    await saveGallery(manifest, gallery)
    const saved = await readGallery(manifest)
    assert.equal(saved.photos[0].file, "travel/照片.jpg")
    assert.equal(saved.photos[0].width, 120)
    assert.equal(saved.photos[0].height, 80)
    assert.equal((await readdir(output)).length, 2)
    assert.equal(saved.photos[1].image, undefined)
    assert.equal(saved.photos[2].image, undefined)
    assert.deepEqual(await readFile(join(source, "travel/照片.jpg")), original)
    const metadata = await sharp(
      join(output, saved.photos[0].image.split("/").pop()),
    ).metadata()
    assert.equal(metadata.format, "webp")
    assert.equal(metadata.exif, undefined)
    await writeFile(join(output, "keep.txt"), "User file")
    saved.photos[0].hidden = true
    await cleanExports(saved, files, output)
    assert.deepEqual(await readdir(output), ["keep.txt"])
  } finally {
    assert.equal(dirname(root), tmpdir())
    await rm(root, { recursive: true, force: true })
  }
})
