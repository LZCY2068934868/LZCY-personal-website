import type { Metadata } from "next"
import Image from "next/image"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PhotoCard } from "@/components/photo-card"
import {
  aboutPortrait,
  portraitPhotos,
  landscapePhotos,
  streetPhotos,
  galleryPhotos,
} from "@/lib/photos"

export const metadata: Metadata = {
  title: "About",
  description:
    "Who I am and what I shoot — an introduction to LZCY's landscape, portrait and street photography.",
}

const sections = [
  {
    heading: "What I shoot",
    body: "Three threads run through the work: landscape, portrait and street. Landscapes are about patience — waiting out weather until the light does something honest. Portraits are quieter; I give people room and photograph the moment they stop posing. Street work is the daily practice that keeps the other two honest.",
  },
  {
    heading: "How I work",
    body: "I shoot slowly and edit hard. A session usually produces a handful of finished frames, not hundreds. For commissions we talk first — about what the photographs are for, where they will live, and what should stay out of them.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-20">
        {/* Intro */}
        <section className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={aboutPortrait.src}
                alt={aboutPortrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Replace with your own portrait
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Introduction
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              I&apos;m LZCY. I photograph light
              <br className="hidden sm:block" /> more than I photograph things.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Based in China, working wherever the weather is interesting. I
              started with a borrowed camera on night walks, and the habit stuck:
              show up early, stay late, keep the frame simple.
            </p>
            {sections.map((s) => (
              <div key={s.heading} className="mt-10">
                <h2 className="font-serif text-xl">{s.heading}</h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Three threads */}
        <section className="mt-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl">Three threads</h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A closer look at each kind of work — all images are placeholders
              awaiting your own.
            </p>
          </div>

          <div className="space-y-16">
            {[
              { title: "Landscape", photos: landscapePhotos },
              { title: "Portrait", photos: portraitPhotos },
              { title: "Street", photos: streetPhotos },
            ].map((group) => (
              <div key={group.title}>
                <div className="mb-6 flex items-baseline gap-4">
                  <h3 className="font-serif text-2xl">{group.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {group.photos.length} frames
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                  {group.photos.map((p) => (
                    <PhotoCard key={p.src} {...p} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wider gallery */}
        <section className="mt-24 border-t border-border/70 pt-12">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl">The wider gallery</h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Everything currently in the selection, one page.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPhotos.map((p) => (
              <PhotoCard key={p.src} {...p} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
