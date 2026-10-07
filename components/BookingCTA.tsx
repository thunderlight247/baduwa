import BookingForm from "./BookingForm";
import Reveal from "./motion/Reveal";
import { siteConfig } from "@/lib/site-config";

const hours = [
  ["Monday", "Closed"],
  ["Tuesday \u2013 Friday", "9:00am \u2013 6:30pm"],
  ["Saturday", "8:00am \u2013 7:00pm"],
  ["Sunday", "10:00am \u2013 4:00pm"],
];

const visitHighlights = [
  "Retwist and loc maintenance",
  "Protective styling and braids",
  "First-time consultations",
];

export default function BookingCTA() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="font-display italic text-clay">Visit the salon</p>
          <h2 className="mt-3 text-balance font-display text-3xl text-ink sm:text-4xl">
            Beach Road, Sekondi-Takoradi
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-umber">
            Western Region, Ghana. Walk-ins are welcome between styles, but a
            reserved slot guarantees your stylist and your preferred time.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-clay/15 bg-white/70 p-6 shadow-warm">
            <p className="text-xs uppercase tracking-[0.2em] text-clay">Salon hours</p>
            <dl className="mt-4 space-y-3">
              {hours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between gap-4 border-b border-clay/10 pb-2 text-sm last:border-b-0 last:pb-0">
                  <dt className="text-umber">{day}</dt>
                  <dd className="font-medium text-ink">{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-8 space-y-3">
            {visitHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-umber">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366]/90 px-6 py-3.5 text-center text-white shadow-warm transition-all hover:-translate-y-0.5 hover:bg-[#25D366]"
            >
              WhatsApp &middot; {siteConfig.phoneDisplay}
            </a>
            <a
              href={`tel:${siteConfig.altPhone}`}
              className="rounded-full border border-clay/40 px-6 py-3.5 text-center text-ink transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              Call &middot; {siteConfig.altPhoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-clay/15 bg-white/80 p-6 shadow-warm sm:p-8">
            <h3 className="font-display text-2xl text-ink">
              Request an appointment
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-umber">
              Tell us what you&rsquo;re after and we&rsquo;ll confirm your slot
              directly.
            </p>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
