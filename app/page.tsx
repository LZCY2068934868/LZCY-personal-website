import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PhotoCard } from "@/components/photo-card"
import { heroPhoto, featuredPhotos, contactEmail } from "@/lib/photos"

export const metadata: Metadata = {
  title: "LZCY — Photography",
  description:
    "Selected landscape, portrait and street photography by LZCY. Quiet images, patient light.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      {/* Hero — full-bleed image, title set over the lower edge */}
      <section className="relative">
        <div className="relative h-[78svh] min-h-[480px] w-full overflow-hidden">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-6 pb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/80">
                Landscape · Portrait · Street
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-6xl">
                Photographs made slowly, in changing light.
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="#work"
                  className="inline-flex h-10 items-center bg-white px-6 text-sm font-medium text-neutral-900 transition-opacity hover:opacity-85"
                >
                  View selected work
                </Link>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex h-10 items-center border border-white/50 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Selected Work
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                A short selection
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Six frames from the last two years — mountains, faces and streets,
              chosen for their light rather than their occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPhotos.map((photo, i) => (
              <PhotoCard key={photo.src} {...photo} priority={i < 3} />
            ))}
          </div>
          <div className="mt-14 border-t border-border/70 pt-8">
            <Link
              href="/about"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              More about how I work →
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <SiteFooter />
      </div>
    </div>
  )
}
