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

export const heroPhoto: Photo = {
  src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2400&q=80&auto=format&fit=crop",
  alt: "Misty pine forest ridgeline at dawn (placeholder image)",
  title: "Ridgeline, Dawn",
  meta: "Placeholder",
  size: "wide",
}

export const featuredPhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80&auto=format&fit=crop",
    alt: "Sunbeams cutting through a mountain forest (placeholder image)",
    title: "Light Study",
    meta: "Mountains · 2024",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80&auto=format&fit=crop",
    alt: "Fog banks drifting over hills (placeholder image)",
    title: "Slow Weather",
    meta: "Hills · 2024",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop",
    alt: "Still lake reflecting mountains at dusk (placeholder image)",
    title: "Still Water",
    meta: "Lake · 2023",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?w=1600&q=80&auto=format&fit=crop",
    alt: "Natural-light portrait (placeholder image)",
    title: "Portrait, Unposed",
    meta: "Portrait · 2024",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80&auto=format&fit=crop",
    alt: "City street in evening rain (placeholder image)",
    title: "Evening Rain",
    meta: "Street · 2023",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=80&auto=format&fit=crop",
    alt: "Quiet city lane at blue hour (placeholder image)",
    title: "Blue Hour",
    meta: "Street · 2024",
    size: "regular",
  },
]

export const galleryPhotos: Photo[] = [
  ...featuredPhotos,
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600&q=80&auto=format&fit=crop",
    alt: "Lone tree on a meadow slope (placeholder image)",
    title: "Lone Tree",
    meta: "Meadow · 2023",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80&auto=format&fit=crop",
    alt: "City skyline at night (placeholder image)",
    title: "City Grid",
    meta: "Street · 2023",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1600&q=80&auto=format&fit=crop",
    alt: "Studio portrait of a man (placeholder image)",
    title: "Studio Sitter",
    meta: "Portrait · 2024",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80&auto=format&fit=crop",
    alt: "Snow peaks under stars (placeholder image)",
    title: "Night Peaks",
    meta: "Mountains · 2024",
    size: "wide",
  },
]

export const portraitPhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&q=80&auto=format&fit=crop",
    alt: "Natural-light portrait in shade (placeholder image)",
    title: "In Shade",
    meta: "Portrait · 2024",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&q=80&auto=format&fit=crop",
    alt: "Quiet studio portrait of a woman (placeholder image)",
    title: "Studio, Quiet",
    meta: "Portrait · 2023",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&auto=format&fit=crop",
    alt: "Natural-light male portrait (placeholder image)",
    title: "Window Light",
    meta: "Portrait · 2024",
    size: "regular",
  },
]

export const landscapePhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop",
    alt: "Forest canopy in sun haze (placeholder image)",
    title: "Canopy",
    meta: "Forest · 2023",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80&auto=format&fit=crop",
    alt: "Long-exposure seascape (placeholder image)",
    title: "Long Exposure",
    meta: "Coast · 2024",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=1600&q=80&auto=format&fit=crop",
    alt: "Dune lines in low light (placeholder image)",
    title: "Dune Lines",
    meta: "Desert · 2023",
    size: "regular",
  },
]

export const streetPhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1600&q=80&auto=format&fit=crop",
    alt: "Wet city street reflections at night (placeholder image)",
    title: "Watt Street",
    meta: "Street · 2024",
    size: "regular",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80&auto=format&fit=crop",
    alt: "Minimal architecture study (placeholder image)",
    title: "Facade",
    meta: "Street · 2023",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80&auto=format&fit=crop",
    alt: "Museum interior light (placeholder image)",
    title: "Interior Light",
    meta: "Interior · 2024",
    size: "regular",
  },
]

export const aboutPortrait = {
  src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1400&q=80&auto=format&fit=crop",
  alt: "Portrait of the photographer (placeholder image)",
}

export const contactEmail = "lzcy19990925@gmail.com"
