# Placeholder images — where to put your own photographs

Every photo on the site is currently a **stock placeholder from Unsplash**, chosen (with help from the workspace's material-gathering pass) for a quiet, low-saturation look that matches the site's tone. This file lists every slot, where it lives in the code, and how to replace it.

## How to replace

1. Export your photograph as a JPEG, long edge ~2400 px, sRGB.
2. Put it in `public/photos/` (create the folder), e.g. `public/photos/ridgelines.jpg`.
3. Open `lib/photos.ts` — **all image slots are defined there** in one place.
4. Replace the `u("<photo-id>")` call with `/photos/<filename>.jpg`, and update `title` / `meta` / `alt` to match your frame.
5. That's it — components read from `lib/photos.ts`, so no other file needs to change. (The hero and about-portrait slots also live there: `heroPhoto` and `aboutPortrait`.)

No `next.config.ts` change is needed for local files; the remote pattern for `images.unsplash.com` can be removed from `next.config.ts` once no placeholder remains.

## Slot inventory

All slots below are defined in `lib/photos.ts` (`u("…")` = an Unsplash photo ID).

### Home page (`app/page.tsx`)

| Slot | Variable | Placeholder (Unsplash ID) |
|---|---|---|
| Hero (full-bleed top image) | `heroPhoto` | `1444927714506-8492d94b4e3d` — layered ridges, misty blue |
| Selected work, 6 tiles | `featuredPhotos` | ridges+figure `1469474968028…`, forest light `1441974231531…`, sea of clouds `1506905925346…`, studio portrait `1524504388940…`, rain street `1449824913935…`, night peaks `1519681393784…` |

### About page (`app/about/page.tsx`)

| Slot | Variable | Placeholder (Unsplash ID) |
|---|---|---|
| Your portrait | `aboutPortrait` | `1492691527719-9d1e07e534b4` — photographer above a sea of clouds — **replace with your own portrait** |
| Landscape trio | `landscapePhotos` | ridgelines `1444927714506…`, above clouds `1492691527719…`, still lake `1501785888041…` |
| Portrait trio | `portraitPhotos` | cool light `1534528741775…`, lakeside `1438761681033…`, grey ground `1500648767791…` |
| Street trio | `streetPhotos` | wet street `1444723121867…`, towers `1486406146926…`, blue hour `1519501025264…` |
| Wider gallery, 10 tiles | `galleryPhotos` | the six featured + dawn valley `1506744038136…`, wheat field `1500382017468…`, towers `1486406146926…`, museum `1487958449943…` |

### Pricing & Contact

These pages are text-only by design — no images to replace. If you later want a photograph behind the pricing header, add it to the page directly.

## Notes

- Titles ("Ridgelines", "Sea of Clouds"…) and meta lines ("Mountains · 2024") are placeholders too — rename them to your real places and years.
- `alt` text describes the placeholder; update it to describe your actual photograph (good for accessibility and SEO).
- The "Replace with your own portrait" caption under the about portrait is a visible reminder — delete that `<p>` in `app/about/page.tsx` once replaced.
- Prices on the Pricing page (¥1,200 / ¥3,400 / ¥6,000, prints ¥260 / ¥420 / ¥1,100) are reasonable starting numbers — adjust them to what you actually charge.
