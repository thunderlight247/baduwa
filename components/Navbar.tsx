"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "Visit Us", href: "#booking", id: "booking" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Shadow the header once the page has scrolled past the hero padding.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock background scroll, close on Escape, return focus on close.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
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

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-shadow ${
          scrolled
            ? "shadow-[0_1px_0_rgba(140,90,56,0.25)]"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        >
          <a href="#top" className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-display text-lg font-semibold text-ink sm:text-xl">
              Baduwa
            </span>
            <span className="font-display text-lg italic text-gold sm:text-xl">
              Locs &amp; Naturals
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className="group relative py-1 text-sm text-umber transition-colors hover:text-gold"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-200 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#booking"
            className="hidden rounded-sm bg-ink px-5 py-2.5 text-sm text-cream transition-colors hover:bg-umber md:inline-block"
          >
            Book Consultation
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-4 self-end bg-ink" />
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-6 text-cream md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg italic text-gold-light">
              Baduwa
            </span>
            <button
              type="button"
              onClick={closeAndReturnFocus}
              aria-label="Close menu"
              className="text-2xl leading-none text-cream"
            >
              &times;
            </button>
          </div>

          <ul className="mt-16 flex flex-col gap-8">
            {links.map((link) => (
              <li key={link.href} className="border-b border-cream/10 pb-6">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === link.id ? "true" : undefined}
                  className="font-display text-3xl italic text-cream aria-[current=true]:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-auto rounded-sm bg-gold px-6 py-4 text-center text-ink"
          >
            Book Consultation
          </a>
        </div>
      )}
    </>
  );
}
