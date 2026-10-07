import ServiceCard from "./ServiceCard";
import Reveal from "./motion/Reveal";

const services = [
  {
    name: "Sisterlocks & Loc Maintenance",
    summary:
      "Healthy retwists, root work, and shape-ups designed to keep every stage of your loc journey clean and intentional.",
    details:
      "We assess scalp health, growth pattern, and loc maturity before choosing the right maintenance method. Each visit is tailored for consistency, comfort, and strong loc health.",
    image: "/images/loc-retwist-goldthread.jpg",
    imageAlt: "Freshly retwisted locs sectioned and wrapped, viewed from behind at Baduwa Locs & Naturals",
    duration: "2-3 hrs",
    price: "From GH₵ 350",
  },
  {
    name: "Micro Twists",
    summary:
      "Afro-kinky installs that add fullness, length, and natural texture without compromising comfort.",
    details:
      "Our micro twists blend seamlessly with your texture for a natural finish that lasts beautifully from day one to your last wear.",
    image: "/images/loc-progression-timeline.jpg",
    imageAlt: "Micro twist texture shown two weeks after install compared to ten months of growth",
    duration: "4-6 hrs",
    price: "From GH₵ 500",
  },
  {
    name: "Braids & Protective Styles",
    summary:
      "Boho braids, box braids, and protective styling that keep your hair strong while you rest from manipulation.",
    details:
      "We size each braid for your density and scalp comfort, then finish with a lifestyle-friendly look that lasts beautifully through movement and weather.",
    image: "/images/boho-box-braids.jpg",
    imageAlt: "Two clients wearing boho box braids, one in copper tone and one in natural black",
    duration: "3-5 hrs",
    price: "From GH₵ 420",
  },
  {
    name: "Natural Haircare",
    summary:
      "Texture restoration, clean cuts, and simple routines for healthy natural hair growth.",
    details:
      "From porosity checks to styling recommendations, we focus on practical routines and tailored care for your hair goals and day-to-day life.",
    image: "/images/natural-puff-profile.jpg",
    imageAlt: "Client with a well-defined natural hair puff styled at Baduwa Locs & Naturals",
    duration: "1-2 hrs",
    price: "From GH₵ 280",
  },
];

const stats = [
  { value: "9+", label: "Years of care" },
  { value: "1000+", label: "Styles refined" },
  { value: "Custom", label: "Consultation-first" },
];

export default function Services() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="rounded-[2rem] border border-clay/15 bg-white/70 p-6 shadow-warm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
                What we do
              </p>
              <h2 className="mt-3 text-balance text-3xl text-ink sm:text-4xl">
                Thoughtful styling, grounded in scalp health and texture care.
              </h2>
            </div>
            <a
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
            >
              Book a consultation
            </a>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-umber">
            Every appointment begins with honest consultation and technique guidance, so your hair is cared for in a way that supports its natural pattern and long-term growth. We keep the process clear, comfortable, and tailored to your texture, schedule, and styling goals.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-cream-dim/70 p-4">
                <p className="font-display text-3xl italic text-ink">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-clay">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={Math.min(i * 0.05, 0.25)}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
