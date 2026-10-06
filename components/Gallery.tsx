import Image from "next/image";

const pieces = [
  {
    label: "Loc Progression",
    image: "/images/loc-progression-back.jpg",
    alt: "Locs before and after a retwist, viewed from behind, showing tighter uniform coils",
    span: "sm:row-span-2",
  },
  {
    label: "Braid Pattern",
    image: "/images/braid-pattern-mannequin.jpg",
    alt: "Cornrow braid pattern mapped on a mannequin head before the full braid-down",
    span: "",
  },
  {
    label: "Loc Transformation",
    image: "/images/loc-transformation-1.jpg",
    alt: "Overgrown locs detangled and retwisted into a clean, defined finish",
    span: "",
  },
  {
    label: "Full Retwist",
    image: "/images/loc-transformation-2.jpg",
    alt: "Locs trimmed and retwisted from a loose, matted state to a sharp shape-up",
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-display italic text-gold-light">
              Real clients, real journeys
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl sm:text-4xl">
              A look at the transformations coming out of Beach Road
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-sm text-cream/70 underline decoration-gold/50 underline-offset-4 hover:text-gold-light"
          >
            See the full album on Instagram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {pieces.map((piece) => (
            <figure
              key={piece.label}
              className={`group relative overflow-hidden rounded-sm ${piece.span}`}
            >
              <div className="relative h-64 w-full sm:h-full">
                <Image
                  src={piece.image}
                  alt={piece.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 rounded-sm bg-ink/80 px-3 py-1.5 text-xs text-cream backdrop-blur-sm">
                {piece.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
