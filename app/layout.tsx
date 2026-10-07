import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageTransition from "@/components/motion/PageTransition";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Loc & Natural Hair Salon, Sekondi-Takoradi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "loc salon Takoradi",
    "sisterlocks Ghana",
    "micro twists Sekondi",
    "natural hair salon Beach Road",
    "braids Takoradi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: siteConfig.name,
    title: siteConfig.name,
    description:
      "Takoradi's premier destination for professional locs and natural haircare, on Beach Road.",
    url: siteConfig.url,
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Takoradi's premier destination for professional locs and natural haircare, on Beach Road.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "GH\u20b5\u20b5",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  openingHoursSpecification: siteConfig.openingHours.map((block) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: block.days,
    opens: block.opens,
    closes: block.closes,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
