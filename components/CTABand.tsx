import Link from "next/link";
import Reveal from "./motion/Reveal";

export default function CTABand() {
  return (
    <section className="bg-[radial-gradient(circle_at_top_left,rgba(183,140,69,0.2),transparent_30%),#1a120d] py-16 text-cream">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-light">
            Ready when you are
          </p>
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
            Begin your next hair chapter at the studio on Beach Road.
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/booking"
            className="gold-button px-8 py-3.5 text-sm font-semibold text-cream"
          >
            Book Appointment
          </Link>
          <a
            href="https://wa.me/233246471181"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold-light hover:text-gold-light"
          >
            WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
