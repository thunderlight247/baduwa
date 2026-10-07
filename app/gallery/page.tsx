import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Loc progressions, retwists, and protective style transformations from Baduwa Locs & Naturals on Beach Road, Sekondi-Takoradi.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Gallery />
      <CTABand />
    </>
  );
}
