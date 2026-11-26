# Local photo manager

Run from the repository root in two PowerShell terminals:

```powershell
pnpm dev
```

```powershell
pnpm photos
```

Open <http://127.0.0.1:4322> to organize photos and
<http://localhost:4321/life> to preview the saved gallery.
Stop the photo manager with Ctrl+C. Stop Astro with `pnpm astro dev stop`
if it runs in the background.

1. Put JPG, PNG, WebP, or AVIF images in `src/assets/life/photos/`.
   Subfolders and Chinese filenames are supported.
2. Click **重新扫描文件夹** after adding new files.
3. Choose **Travels**, **College Days**, or **Life in the US** under Photography.
4. Optionally add a caption, descriptive alt text, and display order.
   The arrow buttons move a photo within its category. Lower order numbers go first.
5. Click **保存全部**, wait for success, then refresh the website preview.

Unassigned and hidden photos are excluded from the website. The homepage's small
**A few moments from my life** link appears after at least one photo is selected.
Empty albums are omitted. Running data can be added later.

Settings are saved in `src/content/life-gallery.json`; category labels are in
`src/content/life-categories.json`. The manager preserves source images and
exports selected photos as 640px and 1600px WebP images to `public/img/life/`,
without source EXIF metadata. Treat that output folder as generated.
Originals stay local and are ignored by Git; the gallery settings and exported
WebP images are tracked.
To publish later, include the gallery JSON and exported images with the site.
The editor itself is a standalone loopback server and is not an Astro route.

For a different editor port, set `$env:PHOTO_MANAGER_PORT = "4323"` before
`pnpm photos`, and open the printed URL using `127.0.0.1`.
