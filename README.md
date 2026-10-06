# Baduwa Locs & Naturals

Marketing website for Baduwa Locs & Naturals, a loc and natural hair salon on
Beach Road, Sekondi-Takoradi, Ghana. Built with Next.js 15 (App Router),
React 19, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        Root layout, fonts (Fraunces + Work Sans), SEO metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind layers, focus states, reduced-motion handling
components/
  Navbar.tsx         Sticky header + mobile overlay menu
  Hero.tsx           Headline, dual CTAs, stats
  Services.tsx       Service catalog grid
  ServiceCard.tsx     Individual expandable service card
  Gallery.tsx        Transformation / portfolio grid
  Testimonials.tsx   Client quotes
  BookingCTA.tsx     Location, hours, contact links
  BookingForm.tsx     Appointment request form
  Footer.tsx         Social links + address
public/images/       Salon reference imagery
```

## Notes

- Images in `public/images/` are placeholders sourced from the salon's own
  reference photos; swap in the studio's official photography when ready.
- The booking form currently shows a client-side confirmation message on
  submit. Wire `BookingForm.tsx`'s `handleSubmit` to an API route, email
  service, or booking provider to make it functional.
- WhatsApp and call links use `0246471181` / `0240098753` formatted with the
  Ghana country code (+233).
