export const siteConfig = {
  name: "Baduwa Locs & Naturals",
  shortName: "Baduwa",
  tagline: "Loc & natural hair salon, Beach Road, Sekondi-Takoradi",
  description:
    "Baduwa Locs & Naturals is Takoradi's premier destination for sisterlocks, traditional locs, micro twists, braids, and natural haircare on Beach Road, Sekondi-Takoradi.",
  // Placeholder production domain \u2014 update once the site has a real one,
  // then update NEXT_PUBLIC_SITE_URL in your deployment environment instead
  // of editing this fallback.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://baduwalocs.com",
  phone: "+233246471181",
  phoneDisplay: "024 647 1181",
  altPhone: "+233240098753",
  altPhoneDisplay: "024 009 8753",
  whatsapp: "https://wa.me/233246471181",
  email: "hello@baduwalocs.com",
  address: {
    street: "Beach Road",
    locality: "Sekondi-Takoradi",
    region: "Western Region",
    country: "GH",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  // ISO 8601 day abbreviations, matching the hours shown on /contact and /booking.
  openingHours: [
    { days: ["Tu", "We", "Th", "Fr"], opens: "09:00", closes: "18:30" },
    { days: ["Sa"], opens: "08:00", closes: "19:00" },
    { days: ["Su"], opens: "10:00", closes: "16:00" },
  ],
} as const;
