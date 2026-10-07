import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const siteLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
  { label: "Booking", href: "/booking" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[rgba(26,18,13,1)] text-cream/75">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-gold-light">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {siteConfig.address.street}, {siteConfig.address.locality},{" "}
            {siteConfig.address.region}, Ghana.
          </p>
          <div className="mt-5 flex gap-4 text-sm text-cream/80">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              Facebook
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-cream/45">Explore</p>
          <ul className="mt-4 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-cream/45">Reach us</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold-light">
                WhatsApp · {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.altPhone}`} className="transition-colors hover:text-gold-light">
                Call · {siteConfig.altPhoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/55">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
