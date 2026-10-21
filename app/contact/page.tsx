import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { contactEmail } from "@/lib/photos"

export const metadata: Metadata = {
  title: "Contact",
  description: `Email LZCY at ${contactEmail} — for commissions, prints or a simple hello.`,
}

const faqs = [
  {
    q: "How far ahead should I write?",
    a: "Two to three weeks for portrait sessions; earlier for weddings and travel-heavy commissions.",
  },
  {
    q: "Do you travel?",
    a: "Yes — across China routinely, and further when the project asks for it. Travel is agreed in the brief.",
  },
  {
    q: "How do prints get delivered?",
    a: "Fine-art prints are made on archival paper and shipped in a rigid tube or flat box, tracked.",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            The easiest way to reach me
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Email is best — for commissions, prints, or a simple hello. I
            usually reply within two days.
          </p>

          {/* Prominent email link */}
          <div className="mt-10">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-block border border-border bg-card px-8 py-6 font-serif text-xl transition-colors hover:bg-muted sm:text-2xl"
            >
              {contactEmail}
            </a>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Click to open your mail app
            </p>
          </div>
        </div>

        {/* Details grid */}
        <div className="mx-auto mt-20 grid max-w-3xl gap-px overflow-hidden border border-border bg-border text-left sm:grid-cols-3">
          {[
            { k: "Based in", v: "China" },
            { k: "Working languages", v: "中文 / English" },
            { k: "Usually replies within", v: "Two days" },
          ].map((item) => (
            <div key={item.k} className="bg-background p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {item.k}
              </p>
              <p className="mt-2 text-sm">{item.v}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-2xl">
          <h2 className="font-serif text-2xl">Before you write</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-sm font-medium">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
