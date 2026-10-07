"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./motion/Reveal";
import { siteConfig } from "@/lib/site-config";

const pieces = [
  {
    label: "Loc Progression",
    category: "Locs",
    image: "/images/loc-progression-back.jpg",
    alt: "Locs before and after a retwist, viewed from behind, showing tighter uniform coils",
    span: "sm:row-span-2",
  },
  {
    label: "Braid Pattern",
    category: "Braids",
    image: "/images/braid-pattern-mannequin.jpg",
    alt: "Cornrow braid pattern mapped on a mannequin head before the full braid-down",
    span: "",
  },
  {
    label: "Loc Transformation",
    category: "Locs",
    image: "/images/loc-transformation-1.jpg",
    alt: "Overgrown locs detangled and retwisted into a clean, defined finish",
    span: "",
  },
  {
    label: "Full Retwist",
    category: "Natural Hair",
    image: "/images/loc-transformation-2.jpg",
    alt: "Locs trimmed and retwisted from a loose, matted state to a sharp shape-up",
    span: "sm:col-span-2",
  },
];

const filters = ["All", "Locs", "Braids", "Natural Hair"] as const;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visiblePieces =
    activeFilter === "All"
      ? pieces
      : pieces.filter((piece) => piece.category === activeFilter);

  return (
    <section className="bg-cream py-20 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="rounded-[2rem] border border-clay/15 bg-white/80 p-6 shadow-warm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-clay">
                Real clients, real journeys
              </p>
              <h2 className="mt-3 text-balance text-3xl text-ink sm:text-4xl">
                A look at the transformations coming out of Beach Road.
              </h2>
            </div>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-clay/25 px-4 py-2 text-sm text-umber transition-colors hover:border-gold hover:text-gold"
            >
              See the full album
            </a>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                activeFilter === filter
                  ? "border-gold bg-gold text-ink"
                  : "border-clay/20 bg-white/70 text-umber hover:border-gold/60 hover:text-gold"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {visiblePieces.map((piece, i) => (
            <Reveal key={piece.label} delay={Math.min(i * 0.05, 0.25)} className={piece.span}>
              <figure className="group relative h-full overflow-hidden rounded-[1.5rem] border border-clay/10 bg-white shadow-warm">
                <div className="relative h-72 w-full sm:h-full">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,18,13,0.72)] via-transparent to-transparent opacity-80" />
                </div>
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-[rgba(26,18,13,0.6)] px-4 py-1.5 text-xs uppercase tracking-[0.12em] text-cream backdrop-blur-sm">
                  {piece.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
