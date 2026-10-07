import type { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Request an appointment at Baduwa Locs & Naturals, Beach Road, Sekondi-Takoradi. WhatsApp, call, or fill in the form to confirm a time.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return <BookingCTA />;
}
