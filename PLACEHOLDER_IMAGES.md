# Placeholder images — where to put your own photographs

Every photo on the site is currently a **stock placeholder** (Unsplash, plus a few picsum.photos seeds). This file lists every slot, where it lives in the code, and how to replace it.

## How to replace

1. Export your photograph as a JPEG, long edge ~2400 px, sRGB.
2. Put it in `public/photos/` (create the folder), e.g. `public/photos/ridgeline-dawn.jpg`.
3. Open `lib/photos.ts` — **all image slots are defined there** in one place.
4. Replace the `src` URL with `/photos/<filename>.jpg`, and update `title` / `meta` / `alt` to match your frame.
5. That's it — components read from `lib/photos.ts`, so no other file needs to change. (The hero and about-portrait slots also live there: `heroPhoto` and `aboutPortrait`.)

No `next.config.ts` change is needed for local files; the remote patterns for `images.unsplash.com` / `picsum.photos` can be removed from `next.config.ts` once no placeholder remains.

## Slot inventory

All slots below are defined in `lib/photos.ts`.

### Home page (`app/page.tsx`)

| Slot | Variable | Current placeholder subject |
|---|---|---|
| Hero (full-bleed top image) | `heroPhoto` | Misty forest ridgeline — Unsplash `photo-1506744038136-46273834b3fb` |
| Selected work, 6 tiles | `featuredPhotos` | Forest light, fog hills, dusk lake, portrait, rain street, blue-hour lane |

### About page (`app/about/page.tsx`)

| Slot | Variable | Current placeholder subject |
|---|---|---|
| Your portrait | `aboutPortrait` | Woman in a hat — Unsplash `photo-1517841905240-472988babdf9` — **replace with your own portrait** |
| Landscape trio | `landscapePhotos` | Canopy, long-exposure coast, dunes |
| Portrait trio | `portraitPhotos` | Shade portrait, studio portrait, window-light portrait |
| Street trio | `streetPhotos` | Wet street, facade, interior light |
| Wider gallery, 10 tiles | `galleryPhotos` | The six featured + lone tree, skyline, studio sitter, night peaks |

### Pricing & Contact

These pages are text-only by design — no images to replace. If you later want a photograph behind the pricing header, add it to the page directly.

## Notes

- Titles like "Ridgeline, Dawn" and meta lines ("Mountains · 2024") are placeholders too — rename them to your real places and years.
- `alt` text describes the placeholder; update it to describe your actual photograph (good for accessibility and SEO).
- The "Replace with your own portrait" caption under the about portrait is a visible reminder — delete that `<p>` in `app/about/page.tsx` once replaced.
- Prices on the Pricing page (¥1,200 / ¥3,400 / ¥6,000, prints ¥260 / ¥420 / ¥1,100) are reasonable starting numbers — adjust them to what you actually charge.
