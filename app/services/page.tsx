import type { Metadata } from "next";
import Services from "@/components/Services";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Loc styling and maintenance, micro twists, braids and protective styles, and natural haircare at Baduwa Locs & Naturals in Sekondi-Takoradi.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <CTABand />
    </>
  );
}
