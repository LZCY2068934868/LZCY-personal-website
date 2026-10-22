import Image from "next/image"

import { cn } from "@/lib/utils"

type PhotoCardProps = {
  src: string
  alt: string
  title: string
  meta: string
  size?: "wide" | "tall" | "regular"
  priority?: boolean
  className?: string
}

/**
 * Photo tile. `src` points at a placeholder (Unsplash/picsum) — see
 * PLACEHOLDER_IMAGES.md for where to swap in your own photographs.
 */
export function PhotoCard({
  src,
  alt,
  title,
  meta,
  size = "regular",
  priority = false,
  className,
}: PhotoCardProps) {
  return (
    <figure className={cn("group flex flex-col gap-3", className)}>
      <div className="relative overflow-hidden bg-muted">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className={cn(
            "h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]",
            size === "tall" && "aspect-[3/4]",
            size === "wide" && "aspect-[16/10]",
            size === "regular" && "aspect-[4/3]"
          )}
        />
      </div>
      <figcaption className="flex items-baseline justify-between gap-4">
        <span className="text-sm text-foreground">{title}</span>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {meta}
        </span>
      </figcaption>
    </figure>
  )
}
