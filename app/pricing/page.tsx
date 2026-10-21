import type { Metadata } from "next"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Session rates for portrait, landscape and street commissions, print pricing, and what is included.",
}

const sessions = [
  {
    name: "Portrait session",
    price: "¥1,200",
    unit: "per session",
    summary: "One person or a couple, on location or at home.",
    lines: [
      "Up to 2 hours on location",
      "One outfit change included",
      "15+ finished, edited photographs",
      "Private online gallery for 90 days",
      "Print-ready high-resolution files",
    ],
  },
  {
    name: "Half day",
    price: "¥3,400",
    unit: "per half day",
    summary: "Longer stories: family days, small events, brand work.",
    lines: [
      "Up to 5 hours of coverage",
      "Two locations within the city",
      "40+ finished, edited photographs",
      "Private online gallery for 90 days",
      "Print-ready high-resolution files",
    ],
  },
  {
    name: "Full day",
    price: "¥6,000",
    unit: "per day",
    summary: "Weddings, editorial and multi-location commissions.",
    lines: [
      "Up to 10 hours of coverage",
      "Travel within the province included",
      "100+ finished, edited photographs",
      "Private online gallery for one year",
      "Print-ready high-resolution files",
    ],
  },
]

const prints = [
  { name: "A4 fine-art print", price: "¥260" },
  { name: "A3 fine-art print", price: "¥420" },
  { name: "60 × 90 cm edition print", price: "¥1,100" },
]

const notes = [
  "Dates are reserved with a 30% deposit; the balance is due on delivery.",
  "Travel beyond the province is billed at cost, agreed beforehand.",
  "Every package includes light retouching — natural skin, no heavy effects.",
  "Not sure which fits? Write to me and we will shape something around the day.",
]

export default function PricingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Pricing
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Simple rates, patient work.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Three ways to book time behind the camera. Everything below is a
            starting point — the final brief and price are always agreed in
            writing before a date is reserved.
          </p>
        </div>

        {/* Session cards */}
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {sessions.map((s) => (
            <div key={s.name} className="flex flex-col bg-background p-8">
              <h2 className="font-serif text-xl">{s.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.summary}
              </p>
              <p className="mt-6">
                <span className="font-serif text-3xl">{s.price}</span>
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.unit}
                </span>
              </p>
              <ul className="mt-6 space-y-2.5">
                {s.lines.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden className="mt-[9px] size-[3px] shrink-0 rounded-full bg-muted-foreground/60" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Prints + notes */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <section>
            <h2 className="font-serif text-2xl">Prints</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Gallery photographs are available as fine-art prints on
              archival paper, in open editions unless marked otherwise.
            </p>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {prints.map((p) => (
                <div key={p.name} className="flex items-baseline justify-between py-3.5">
                  <dt className="text-sm">{p.name}</dt>
                  <dd className="font-mono text-sm text-muted-foreground">{p.price}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section>
            <h2 className="font-serif text-2xl">Good to know</h2>
            <ul className="mt-6 space-y-4">
              {notes.map((n) => (
                <li key={n} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="mt-[9px] size-[3px] shrink-0 rounded-full bg-muted-foreground/60" />
                  {n}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-10 items-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Ask about a date
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
