"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const imageSpring = useSpring({
    transform: hovered ? "translate3d(0px, -8px, 0px) scale(1.02)" : "translate3d(0px, 0px, 0px) scale(1)",
    boxShadow: hovered
      ? "0 30px 60px rgba(32, 21, 13, 0.22)"
      : "0 18px 40px rgba(32, 21, 13, 0.12)",
    config: { tension: 220, friction: 18 },
  });

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,140,69,0.16),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-12 md:grid-cols-[1.1fr_0.9fr] md:pb-24 md:pt-16">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          <motion.div
            variants={reduceMotion ? undefined : item}
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-umber shadow-sm backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-gold" />
            Beach Road, Sekondi-Takoradi
          </motion.div>

          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="mt-6 max-w-xl text-balance text-4xl leading-[0.95] text-ink sm:text-5xl lg:text-[4rem]"
          >
            Takoradi&apos;s Premier Destination for Professional Locs &amp; Natural Haircare
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-umber"
          >
            Precision-led care for sisterlocks, traditional locs, micro twists,
            braids, and healthy natural textures tailored to your scalp, structure,
            and lifestyle.
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/booking"
                className="gold-button px-8 py-3.5 text-sm font-semibold tracking-[0.02em] text-cream"
              >
                Book Appointment
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white/65 px-8 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-gold hover:text-gold"
              >
                View Gallery
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-10 flex flex-wrap gap-4 text-sm text-umber"
          >
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2.5 transition-colors hover:border-gold hover:text-gold"
            >
              <span aria-hidden="true">☎</span>
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Baduwa Locs & Naturals, I would like to book a consultation.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2.5 transition-colors hover:border-[#1f7a47] hover:text-[#1f7a47]"
            >
              <span aria-hidden="true">✦</span>
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.dl
            variants={reduceMotion ? undefined : item}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-ink/10 pt-7"
          >
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-clay">Studio</dt>
              <dd className="mt-2 font-display text-3xl text-ink">9+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-clay">Styles</dt>
              <dd className="mt-2 font-display text-3xl text-ink">20+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-clay">Loved</dt>
              <dd className="mt-2 font-display text-3xl text-ink">1.2k+</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <animated.div
            style={imageSpring}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden rounded-[2rem] ring-1 ring-ink/5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/natural-puff-profile.jpg"
                alt="Client with a defined natural hair puff and gold statement earrings, styled at Baduwa Locs & Naturals"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(32,21,13,0.7)] via-[rgba(32,21,13,0.15)] to-transparent" />
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[rgba(32,21,13,0.55)] p-4 text-cream backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-cream/70">Luxury loc care</p>
              <p className="mt-2 font-display text-2xl leading-none text-gold-light">
                Healthy hair starts with healthy rituals.
              </p>
            </div>
          </animated.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-6 bottom-10 hidden rounded-2xl border border-gold/30 bg-white/90 p-4 text-ink shadow-warm md:block"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-clay">Signature care</p>
            <p className="mt-2 font-display text-2xl text-ink">Precision-led styling</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
