import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi Baduwa Locs & Naturals, I'd like to book a consultation."
  );

  return (
    <Link
      href={`${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a47] text-white shadow-[0_24px_40px_rgba(32,21,13,0.22)] transition-transform duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7a47]"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.02 0C5.46 0 .12 5.34.12 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.66a11.94 11.94 0 0 0 5.67 1.72h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.48-8.41Zm-8.5 18.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.98 1-3.67-.23-.37A9.88 9.88 0 1 1 12.02 22.1Zm5.4-7.42c-.29-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.08-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.21 3.09.15.2 2.09 3.19 5.06 4.47.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </Link>
  );
}
