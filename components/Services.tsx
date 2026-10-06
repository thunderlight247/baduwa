import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "Loc Styling & Maintenance",
    summary:
      "Sisterlocks, traditional locs, interlocking, and rootlocks retwists that keep every stage of your journey neat and healthy.",
    details:
      "We start with a scalp and pattern consultation, then work section by section with the interlocking or palm-rolling method suited to your hair. Maintenance visits are scheduled around your growth cycle, not a fixed calendar, so locs mature without thinning or over-tightening.",
    image: "/images/loc-retwist-goldthread.jpg",
    imageAlt: "Freshly retwisted locs sectioned and wrapped, viewed from behind at Baduwa Locs & Naturals",
  },
  {
    name: "Micro Twists",
    summary:
      "Premium afro-kinky human hair installations for fullness, length, and a natural two-strand finish that lasts.",
    details:
      "Using human-hair afro-kinky bulk, we twist from root to tip so the extension blends seamlessly with your own texture. Installs typically hold for six to eight weeks with proper night care, and can be styled up, back, or loose from day one.",
    image: "/images/loc-progression-timeline.jpg",
    imageAlt: "Micro twist texture shown two weeks after install compared to ten months of growth",
  },
  {
    name: "Braids & Protective Styles",
    summary:
      "Rasta braids, boho box braids, and crochet sets designed to protect your edges while you take a break from manipulation.",
    details:
      "Every protective style begins with a tension check at the parting, not just the finished look. We size the braids to your hair's density, and boho sets are finished with hand-pulled curly pieces for a soft, undone edge.",
    image: "/images/boho-box-braids.jpg",
    imageAlt: "Two clients wearing boho box braids, one in copper tone and one in natural black",
  },
  {
    name: "Natural Haircare",
    summary:
      "Texture definition, custom cuts, and transitional care for clients growing out relaxers or building a healthy regimen.",
    details:
      "This is the foundation service for anyone starting or restarting their natural hair story: porosity-matched product selection, shape-conscious cutting, and a take-home routine you can actually keep up with between visits.",
    image: "/images/natural-puff-profile.jpg",
    imageAlt: "Client with a well-defined natural hair puff styled at Baduwa Locs & Naturals",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-dim py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-display italic text-clay">What we do</p>
          <h2 className="mt-3 text-balance font-display text-3xl text-ink sm:text-4xl">
            A service list built around one crown, at a time
          </h2>
          <p className="mt-4 text-umber">
            Every appointment opens with a consultation on your hair&rsquo;s
            history, density, and goals &mdash; because the right technique
            depends on all three.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
