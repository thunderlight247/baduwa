"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";

type Service = {
  name: string;
  summary: string;
  details: string;
  image: string;
  imageAlt: string;
  duration: string;
  price: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const panelId = `${service.name.replace(/\s+/g, "-").toLowerCase()}-details`;

  const cardSpring = useSpring({
    transform: hovered ? "translate3d(0px, -6px, 0px) scale(1.01)" : "translate3d(0px, 0px, 0px) scale(1)",
    boxShadow: hovered
      ? "0 22px 44px rgba(32, 21, 13, 0.12)"
      : "0 14px 30px rgba(32, 21, 13, 0.08)",
    config: { tension: 220, friction: 18 },
  });

  return (
    <animated.article
      style={cardSpring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/5 bg-white"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(32,21,13,0.45)] via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/50 bg-[rgba(32,21,13,0.38)] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
          {service.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl text-ink">{service.name}</h3>
          <span className="rounded-full bg-gold/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-umber">
            {service.price}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-umber">{service.summary}</p>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-4 inline-flex items-center gap-2 self-start text-sm font-medium text-gold transition-colors hover:text-clay"
        >
          {expanded ? "Show less" : "Learn more"}
          <span
            aria-hidden="true"
            className={`transition-transform duration-200 ${expanded ? "-rotate-90" : "rotate-90"}`}
          >
            &rsaquo;
          </span>
        </button>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <p className="overflow-hidden text-sm leading-relaxed text-umber/90">{service.details}</p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4">
          <span className="text-xs uppercase tracking-[0.14em] text-clay">Starts at</span>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:bg-umber"
          >
            Book
          </Link>
        </div>
      </div>
    </animated.article>
  );
}
