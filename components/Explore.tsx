import Image from "next/image";
import Link from "next/link";
import Reveal from "./motion/Reveal";

const stops = [
  {
    title: "About Us",
    body: "Our story, our chair-side philosophy, and the team behind it.",
    href: "/about",
    image: "/images/loc-progression-back.jpg",
  },
  {
    title: "Our Services",
    body: "Locs, micro twists, braids, and natural haircare, explained.",
    href: "/services",
    image: "/images/loc-retwist-goldthread.jpg",
  },
  {
    title: "Gallery",
    body: "Transformations straight from the chair on Beach Road.",
    href: "/gallery",
    image: "/images/loc-transformation-1.jpg",
  },
  {
    title: "Shop",
    body: "The products we reach for between appointments.",
    href: "/shop",
    image: "/images/braid-pattern-mannequin.jpg",
  },
];

export default function Explore() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-display italic text-clay">Find your way around</p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl text-ink sm:text-4xl">
            Everything your crown needs, one chair at a time
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stops.map((stop, i) => (
            <Reveal key={stop.href} delay={Math.min(i * 0.05, 0.25)}>
              <Link
                href={stop.href}
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl bg-white shadow-card transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={stop.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/35 transition-colors group-hover:bg-ink/50" />
                </div>
                <div className="bg-cream-dim p-5">
                  <h3 className="font-display text-lg text-ink">
                    {stop.title}
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block text-gold transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </h3>
                  <p className="mt-1.5 text-sm text-umber">{stop.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
