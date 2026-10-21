# LZCY — Photography portfolio

A personal photography portfolio built on the shadcn Next.js template (preset `b5rR41Mtnc`, style `base-lyra`).

## Pages

- `/` — hero image, introduction blurb, selected work (6 photographs)
- `/about` — who I am, what and how I shoot, plus landscape / portrait / street sections
- `/pricing` — session rates, prints, booking notes
- `/contact` — prominent email link and a few practical answers

## Development

```bash
pnpm install
pnpm dev
```

## Replacing the placeholder images

Every photograph on the site is a stock placeholder. All image slots are defined in **`lib/photos.ts`** — see **`PLACEHOLDER_IMAGES.md`** for the full slot inventory and instructions.

## Fonts

- **Fraunces** (`--font-serif`) — display serif for headings; soft, slightly wonky, chosen to feel like a photo journal rather than a corporate site
- **Inter** (`--font-sans`) — body text
- **Geist Mono** (`--font-mono`) — small uppercase labels and metadata captions
