import Reveal from "./motion/Reveal";
import { siteConfig } from "@/lib/site-config";

const products = [
  {
    name: "Rootlock Retwist Gel",
    category: "Loc Care",
    body: "Alcohol-free holding gel for interlocking and palm-rolled retwists, without white residue.",
    swatch: "bg-gradient-to-br from-umber via-clay to-gold",
  },
  {
    name: "Scalp & Loc Oil",
    category: "Loc Care",
    body: "A light rosemary-and-jojoba blend for scalp massage between retwist appointments.",
    swatch: "bg-gradient-to-br from-ink via-umber to-clay",
  },
  {
    name: "Afro-Kinky Bulk Hair",
    category: "Micro Twists",
    body: "100% human hair bulk for micro twist installs, pre-stretched and ready to section.",
    swatch: "bg-gradient-to-br from-clay via-gold to-gold-light",
  },
  {
    name: "Satin Loc Wrap",
    category: "Aftercare",
    body: "Adjustable satin-lined wrap to protect fresh retwists and twist-outs overnight.",
    swatch: "bg-gradient-to-br from-gold-light via-cream-dim to-clay",
  },
  {
    name: "Edge & Baby Hair Control",
    category: "Styling",
    body: "Light-hold edge control for sleek partings that brushes out without flaking.",
    swatch: "bg-gradient-to-br from-umber via-clay to-cream-dim",
  },
  {
    name: "Leave-In Detangling Spray",
    category: "Natural Haircare",
    body: "A slip-forward spray for sectioning natural hair ahead of twists, braids, or trims.",
    swatch: "bg-gradient-to-br from-gold via-clay to-ink",
  },
];

const shopHighlights = [
  "Curated for locs, twists and natural texture",
  "Available in-shop and by local delivery",
  "Ask us for product pairing recommendations",
];

const whatsappNumber = siteConfig.phone.replace("+", "");

export default function Shop() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-[2rem] border border-clay/15 bg-white/70 p-6 shadow-warm sm:p-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display italic text-clay">Take the care home</p>
              <h1 className="mt-3 max-w-xl text-balance font-display text-3xl text-ink sm:text-4xl">
                Products we actually use on you, now on the shelf
              </h1>
            </div>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform hover:-translate-y-0.5"
            >
              Message the salon
            </a>
          </div>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-umber">
            Everything here is stocked at the Beach Road salon. Message us on
            WhatsApp with the product name and we&rsquo;ll set it aside for
            pickup or local delivery.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {shopHighlights.map((item) => (
            <div key={item} className="rounded-2xl border border-clay/15 bg-cream-dim/60 p-4 text-sm text-umber">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={Math.min(i * 0.05, 0.25)}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-clay/15 bg-white shadow-warm transition-transform duration-300 hover:-translate-y-1.5">
                <div
                  className={`h-36 w-full transition-transform duration-500 group-hover:scale-105 ${product.swatch}`}
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-clay">
                    {product.category}
                  </p>
                  <h2 className="mt-1.5 font-display text-lg text-ink">
                    {product.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-umber">
                    {product.body}
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi Baduwa, I'd like to order: ${product.name}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full border border-gold/50 px-5 py-2.5 text-sm text-gold transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
