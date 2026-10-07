import type { Metadata } from "next";
import Shop from "@/components/Shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Loc care, micro twist hair, and natural haircare products stocked at Baduwa Locs & Naturals, Beach Road, Sekondi-Takoradi.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return <Shop />;
}
