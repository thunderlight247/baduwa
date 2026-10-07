import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Opening hours, phone, WhatsApp, and directions for Baduwa Locs & Naturals, Beach Road, Sekondi-Takoradi.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
