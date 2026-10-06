"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  name: string;
  summary: string;
  details: string;
  image: string;
  imageAlt: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `${service.name.replace(/\s+/g, "-").toLowerCase()}-details`;

  return (
    <article className="flex flex-col overflow-hidden rounded-sm bg-white/60">
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col border border-t-0 border-clay/15 p-6">
        <h3 className="font-display text-xl text-ink">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-umber">
          {service.summary}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-4 flex items-center gap-2 text-sm text-gold transition-colors hover:text-clay"
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
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}
        >
          <p className="overflow-hidden text-sm leading-relaxed text-umber/90">
            {service.details}
          </p>
        </div>
      </div>
    </article>
  );
}
