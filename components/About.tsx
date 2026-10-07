import Image from "next/image";
import Reveal from "./motion/Reveal";

const values = [
  {
    title: "Patience",
    body: "Locs and natural hair move on their own timeline. We plan maintenance around your hair's growth, not a fixed calendar.",
  },
  {
    title: "Precision",
    body: "Every parting is measured, every retwist checked for tension, so the finished style holds its shape between visits.",
  },
  {
    title: "Partnership",
    body: "You leave with a routine you can keep up at home, not just a style that only looks right in the chair.",
  },
];

const milestones = [
  { label: "Years of care", value: "9+" },
  { label: "Loc styles refined", value: "1000+" },
  { label: "Everyday rituals", value: "Custom" },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(183,140,69,0.14),_transparent_65%)]" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative order-2 lg:order-1" y={16}>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-t-[2rem] rounded-bl-[5rem] rounded-br-[1rem] shadow-warm">
              <Image
                src="/images/loc-transformation-2.jpg"
                alt="A client's locs before and after a full retwist and shape-up at Baduwa Locs & Naturals"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/35 bg-ink/70 p-4 text-cream backdrop-blur-sm">
                <p className="font-display text-xl italic text-gold-light">
                  Gentle, consistent care.
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  Thoughtful rituals for healthy growth and beautifully defined strands.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <p className="font-display italic text-clay">Our story</p>
            <h1 className="mt-3 text-balance font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
              Built on Beach Road, around one chair and a lot of patience
            </h1>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-umber">
              Baduwa Locs &amp; Naturals started as a single chair dedicated
              to doing right by textured hair — no rushed partings, no
              guesswork on products that don&rsquo;t suit your porosity.
              Nearly a decade later, that same standard runs through every
              sisterlock install, retwist, and protective set that leaves the
              salon.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-umber">
              We work with first-time loc clients as often as we work with
              hair that&rsquo;s been growing for years, and we treat both
              with the same unhurried attention.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {milestones.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-clay/15 bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                  <p className="font-display text-2xl italic text-ink">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-clay">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dim py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="max-w-xl text-balance font-display text-2xl text-ink sm:text-3xl">
              What guides the work
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="group h-full rounded-[1.75rem] border border-clay/15 bg-white/70 p-6 shadow-warm transition-transform duration-300 hover:-translate-y-1">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-clay" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl italic text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-umber">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
