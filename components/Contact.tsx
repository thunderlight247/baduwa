import Image from "next/image";
import Reveal from "./motion/Reveal";
import { siteConfig } from "@/lib/site-config";

const hours = [
  ["Monday", "Closed"],
  ["Tuesday \u2013 Friday", "9:00am \u2013 6:30pm"],
  ["Saturday", "8:00am \u2013 7:00pm"],
  ["Sunday", "10:00am \u2013 4:00pm"],
];

const methods = [
  {
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsapp,
  },
  {
    label: "Call",
    value: siteConfig.altPhoneDisplay,
    href: `tel:${siteConfig.altPhone}`,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export default function Contact() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="order-2 rounded-[2rem] border border-clay/15 bg-white/80 p-8 shadow-warm backdrop-blur-sm sm:p-10 lg:order-1">
          <p className="font-display italic text-clay">Get in touch</p>
          <h1 className="mt-3 text-balance font-display text-3xl text-ink sm:text-4xl">
            Beach Road, Sekondi-Takoradi
          </h1>
          <p className="mt-4 text-base leading-relaxed text-umber">
            Western Region, Ghana. Reach out directly, or stop by between
            styles — walk-ins are always welcome.
          </p>

          <div className="mt-8 rounded-2xl bg-cream-dim/80 p-4">
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

          <ul className="mt-8 space-y-4 border-t border-clay/15 pt-6">
            {methods.map((method) => (
              <li key={method.label}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-baseline justify-between gap-6 rounded-xl px-2 py-2 transition-colors hover:bg-cream-dim/60"
                >
                  <span className="text-sm text-clay">{method.label}</span>
                  <span className="font-display text-lg text-ink transition-colors group-hover:text-gold">
                    {method.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 border-t border-clay/15 pt-6 text-sm">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-clay/25 px-4 py-2 text-umber transition-colors hover:border-gold hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-clay/25 px-4 py-2 text-umber transition-colors hover:border-gold hover:text-gold"
            >
              Facebook
            </a>
          </div>
        </Reveal>

        <Reveal className="relative order-1 lg:order-2" delay={0.1} y={16}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[2rem] rounded-bl-[5rem] rounded-br-[1rem] shadow-warm">
            <Image
              src="/images/natural-puff-profile.jpg"
              alt="A client styled at Baduwa Locs & Naturals, Beach Road"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -right-7 hidden w-48 rounded-2xl bg-ink px-6 py-5 text-cream shadow-warm sm:block">
            <p className="font-display text-2xl italic text-gold-light">
              Beach Road
            </p>
            <p className="mt-1 text-sm text-cream/80">
              Opposite the junction, on-site parking
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
