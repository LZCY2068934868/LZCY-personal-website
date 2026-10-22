/**
 * Central photo inventory.
 *
 * ── REPLACE THESE PLACEHOLDERS ─────────────────────────────────────────
 * Every `src` below is a stock placeholder from Unsplash (a few from
 * picsum.photos). Swap each URL for your own photograph — export it as a
 * long-edge ~2400px JPEG, drop it in `public/photos/`, and reference it as
 * `/photos/<filename>.jpg`. Keep `title`, adjust `meta` (place / year).
 * Full checklist: PLACEHOLDER_IMAGES.md in the repository root.
 * ───────────────────────────────────────────────────────────────────────
 */

export type Photo = {
  src: string
  alt: string
  title: string
  meta: string
  size: "wide" | "tall" | "regular"
}

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const heroPhoto: Photo = {
  src: u("1444927714506-8492d94b4e3d", 2400),
  alt: "Layered mountain ridges in misty blue (placeholder image)",
  title: "Ridgelines",
  meta: "Placeholder",
  size: "wide",
}

export const featuredPhotos: Photo[] = [
  {
    src: u("1469474968028-56623f02e42e"),
    alt: "Mountain ridges with a figure on the summit (placeholder image)",
    title: "Light Study",
    meta: "Mountains · 2024",
    size: "tall",
  },
  {
    src: u("1441974231531-c6227db76b6e"),
    alt: "Sunbeams cutting through a forest (placeholder image)",
    title: "Forest Light",
    meta: "Forest · 2023",
    size: "regular",
  },
  {
    src: u("1506905925346-21bda4d32df4"),
    alt: "Sea of clouds over mountains (placeholder image)",
    title: "Sea of Clouds",
    meta: "Mountains · 2024",
    size: "regular",
  },
  {
    src: u("1524504388940-b1c1722653e1"),
    alt: "Studio portrait against a dark background (placeholder image)",
    title: "Portrait, Studio",
    meta: "Portrait · 2024",
    size: "tall",
  },
  {
    src: u("1449824913935-59a10b8d2000"),
    alt: "City street in evening rain (placeholder image)",
    title: "Evening Rain",
    meta: "Street · 2023",
    size: "regular",
  },
  {
    src: u("1519681393784-d120267933ba"),
    alt: "Snow peaks under a starry sky (placeholder image)",
    title: "Night Peaks",
    meta: "Mountains · 2024",
    size: "regular",
  },
]

export const galleryPhotos: Photo[] = [
  ...featuredPhotos,
  {
    src: u("1506744038136-46273834b3fb"),
    alt: "Misty valley at dawn (placeholder image)",
    title: "Dawn Valley",
    meta: "Valley · 2023",
    size: "regular",
  },
  {
    src: u("1500382017468-9049fed747ef"),
    alt: "Golden wheat field in low light (placeholder image)",
    title: "Wheat, Low Sun",
    meta: "Field · 2023",
    size: "regular",
  },
  {
    src: u("1486406146926-c627a92ad1ab"),
    alt: "Looking up dark towers, near-monochrome (placeholder image)",
    title: "Towers",
    meta: "Street · 2024",
    size: "tall",
  },
  {
    src: u("1487958449943-2429e8be8625"),
    alt: "Modern museum against a pale sky (placeholder image)",
    title: "Museum",
    meta: "Street · 2023",
    size: "wide",
  },
]

export const portraitPhotos: Photo[] = [
  {
    src: u("1534528741775-53994a69daeb"),
    alt: "Portrait in cool blue light (placeholder image)",
    title: "Cool Light",
    meta: "Portrait · 2024",
    size: "tall",
  },
  {
    src: u("1438761681033-6461ffad8d80"),
    alt: "Natural-light portrait by a lake (placeholder image)",
    title: "Lakeside",
    meta: "Portrait · 2023",
    size: "regular",
  },
  {
    src: u("1500648767791-00dcc994a43e"),
    alt: "Natural-light male portrait on grey (placeholder image)",
    title: "Grey Ground",
    meta: "Portrait · 2024",
    size: "regular",
  },
]

export const landscapePhotos: Photo[] = [
  {
    src: u("1444927714506-8492d94b4e3d"),
    alt: "Layered mountain ridges in misty blue (placeholder image)",
    title: "Ridgelines",
    meta: "Mountains · 2024",
    size: "wide",
  },
  {
    src: u("1492691527719-9d1e07e534b4", 1600),
    alt: "Photographer seated on a rock above a sea of clouds (placeholder image)",
    title: "Above Clouds",
    meta: "Mountains · 2024",
    size: "regular",
  },
  {
    src: u("1501785888041-af3ef285b470"),
    alt: "Still lake reflecting mountains at dusk (placeholder image)",
    title: "Still Water",
    meta: "Lake · 2023",
    size: "regular",
  },
]

export const streetPhotos: Photo[] = [
  {
    src: u("1444723121867-7a241cacace9"),
    alt: "Wet city street reflections at night (placeholder image)",
    title: "Wet Street",
    meta: "Street · 2024",
    size: "regular",
  },
  {
    src: u("1486406146926-c627a92ad1ab"),
    alt: "Looking up dark towers, near-monochrome (placeholder image)",
    title: "Towers",
    meta: "Street · 2024",
    size: "tall",
  },
  {
    src: u("1519501025264-65ba15a82390"),
    alt: "Quiet city lane at blue hour (placeholder image)",
    title: "Blue Hour",
    meta: "Street · 2024",
    size: "regular",
  },
]

export const aboutPortrait = {
  src: u("1492691527719-9d1e07e534b4", 1400),
  alt: "The photographer above a sea of clouds (placeholder image)",
}

export const contactEmail = "lzcy19990925@gmail.com"
