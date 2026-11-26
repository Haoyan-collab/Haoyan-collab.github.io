import { z } from "astro/zod"
import categories from "@/content/life-categories.json"
import gallery from "@/content/life-gallery.json"

const photoSchema = z
  .object({
    file: z.string(),
    category: z
      .string()
      .nullable()
      .refine(
        (value) =>
          value === null ||
          categories.some((category) => category.id === value),
        "Unknown life gallery category",
      ),
    caption: z.string().max(500),
    alt: z.string().max(500),
    order: z.number().int().nonnegative(),
    hidden: z.boolean(),
    image: z
      .string()
      .regex(/^\/img\/life\/[a-f0-9]{64}\.webp$/)
      .optional(),
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
  })
  .refine(
    (photo) =>
      !photo.category ||
      photo.hidden ||
      Boolean(photo.image && photo.width && photo.height),
    "Save selected photos with pnpm photos before building the gallery",
  )

const parsed = z
  .object({ version: z.literal(1), photos: z.array(photoSchema) })
  .parse(gallery)
export const lifeAlbums = categories
  .map((category) => ({
    ...category,
    photos: parsed.photos
      .filter((photo) => photo.category === category.id && !photo.hidden)
      .sort((a, b) => a.order - b.order || a.file.localeCompare(b.file)),
  }))
  .filter((album) => album.photos.length > 0)

export const hasLifePhotos = lifeAlbums.length > 0
