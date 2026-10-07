"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeAndReturnFocus() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 border-b border-transparent bg-cream/85 backdrop-blur-md transition-all ${
          scrolled ? "shadow-[0_1px_0_rgba(140,90,56,0.2)]" : ""
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        >
          <Link href="/" className="flex items-center gap-2 text-left">
            <span className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Baduwa
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-clay sm:text-xs">
              Locs &amp; Naturals
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative py-2 text-sm font-medium tracking-[0.02em] text-umber transition-colors hover:text-gold"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-200 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/80 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Book Now
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative h-5 w-6 lg:hidden"
          >
            <span
              className={`absolute left-0 right-0 top-0 h-px bg-ink transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute right-0 bottom-0 h-px bg-ink transition-all duration-300 ${
                open ? "bottom-1/2 w-6 -rotate-45" : "w-4"
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[60] flex flex-col bg-[rgba(26,18,13,0.97)] px-6 py-6 text-cream lg:hidden"
            initial={reduceMotion ? undefined : { opacity: 0, x: "-100%" }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: "-100%" }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-cream/10 pb-5">
              <span className="font-display text-xl text-gold-light">Baduwa</span>
              <button
                type="button"
                onClick={closeAndReturnFocus}
                aria-label="Close menu"
                className="text-2xl leading-none text-cream"
              >
                &times;
              </button>
            </div>

            <ul className="mt-8 flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduceMotion ? undefined : { opacity: 0, x: 18 }}
                  animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: reduceMotion ? 0 : 0.05 + i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="block border-b border-cream/10 pb-3 text-2xl font-medium text-cream aria-[current=page]:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href="/booking"
                className="flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-base font-semibold text-ink"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
