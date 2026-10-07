import type { Metadata } from "next";
import About from "@/components/About";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story and philosophy behind Baduwa Locs & Naturals, a loc and natural hair salon on Beach Road, Sekondi-Takoradi.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <CTABand />
    </>
  );
}
