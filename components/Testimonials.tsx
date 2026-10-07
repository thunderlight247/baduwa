import Reveal from "./motion/Reveal";

const testimonials = [
  {
    quote:
      "My sisterlocks were installed and maintained with so much care. Three years in and they still look intentional, not overgrown.",
    name: "Abena O.",
    detail: "Sisterlocks client, 3 years",
  },
  {
    quote:
      "I came in with relaxer damage and left with a cut and a routine I could actually follow. My hair finally feels like mine again.",
    name: "Efua K.",
    detail: "Natural haircare client",
  },
  {
    quote:
      "Booked micro twists for a wedding on Beach Road and they held perfectly through the whole weekend, humidity and all.",
    name: "Nana Ama S.",
    detail: "Micro twists client",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-clay">
            In their words
          </p>
          <h2 className="mt-3 max-w-xl text-balance text-3xl text-ink sm:text-4xl">
            What keeps clients coming back to Beach Road.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.05, 0.25)}>
              <blockquote className="flex h-full flex-col rounded-[1.75rem] border border-ink/5 bg-white p-8 shadow-[0_18px_40px_rgba(32,21,13,0.06)]">
                <div className="mb-4 text-gold" aria-label="5 star review">
                  <span aria-hidden="true">★★★★★</span>
                </div>
                <p className="text-xl leading-snug text-ink">“{t.quote}”</p>
                <footer className="mt-8 border-t border-ink/8 pt-4 text-sm text-umber">
                  <cite className="not-italic font-semibold text-ink">{t.name}</cite>
                  <span className="mt-1 block text-clay">{t.detail}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
