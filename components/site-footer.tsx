import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl">LZCY</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Landscape, portrait and street photography.
          </p>
        </div>
        <div className="flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          <Link href="/#work" className="transition-colors hover:text-foreground">
            Work
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
          <a
            href="mailto:lzcy19990925@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          © {new Date().getFullYear()} LZCY
        </p>
      </div>
    </footer>
  )
}
