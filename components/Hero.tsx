import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-14 md:grid-cols-[1.1fr_0.9fr] md:pb-0 md:pt-20">
        <div>
          <p className="font-display text-base italic text-clay">
            Beach Road, Sekondi-Takoradi
          </p>

          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Takoradi&rsquo;s premier destination for professional locs &amp;
            natural haircare
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-umber">
            From first locs to decade-long journeys, Baduwa&rsquo;s stylists
            bring precision and patience to sisterlocks, traditional locs,
            micro twists, and protective braids &mdash; care built around the
            texture you were born with.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-sm bg-ink px-7 py-3.5 text-center text-cream transition-colors hover:bg-umber"
            >
              View Our Services
            </a>
            <a
              href="tel:+233246471181"
              className="rounded-sm border border-clay/40 px-7 py-3.5 text-center text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Call to Book &middot; 024 647 1181
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-clay/15 pt-8">
            <div>
              <dt className="text-sm text-clay">Years serving Takoradi</dt>
              <dd className="mt-1 font-display text-3xl text-ink">9+</dd>
            </div>
            <div>
              <dt className="text-sm text-clay">Loc &amp; twist styles</dt>
              <dd className="mt-1 font-display text-3xl text-ink">20+</dd>
            </div>
            <div>
              <dt className="text-sm text-clay">Client journeys crowned</dt>
              <dd className="mt-1 font-display text-3xl text-ink">1,200+</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[6rem] rounded-bl-[2rem] rounded-br-lg">
            <Image
              src="/images/natural-puff-profile.jpg"
              alt="Client with a defined natural hair puff and gold statement earrings, styled at Baduwa Locs & Naturals"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-44 rounded-sm bg-ink px-5 py-4 text-cream shadow-xl sm:block">
            <p className="font-display text-2xl italic text-gold-light">
              Est. mindset
            </p>
            <p className="mt-1 text-sm text-cream/80">
              Patience-led loc &amp; natural hair artistry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
