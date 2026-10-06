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
    <section id="reviews" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-display italic text-clay">In their words</p>
        <h2 className="mt-3 max-w-xl text-balance font-display text-3xl text-ink sm:text-4xl">
          What keeps clients coming back to Beach Road
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-clay/15 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="flex flex-col bg-cream p-8">
              <p className="font-display text-xl italic leading-snug text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-umber">
                <cite className="not-italic font-medium text-ink">
                  {t.name}
                </cite>
                <span className="block text-clay">{t.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
