import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baduwa Locs & Naturals | Loc & Natural Hair Salon, Sekondi-Takoradi",
  description:
    "Baduwa Locs & Naturals is Takoradi's premier destination for sisterlocks, traditional locs, micro twists, braids, and natural haircare on Beach Road, Sekondi-Takoradi.",
  keywords: [
    "loc salon Takoradi",
    "sisterlocks Ghana",
    "micro twists Sekondi",
    "natural hair salon Beach Road",
    "braids Takoradi",
  ],
  openGraph: {
    title: "Baduwa Locs & Naturals",
    description:
      "Takoradi's premier destination for professional locs and natural haircare, on Beach Road.",
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
