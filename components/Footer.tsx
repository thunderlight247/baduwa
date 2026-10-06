export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg italic text-gold-light">
            Baduwa Locs &amp; Naturals
          </p>
          <p className="mt-1 text-sm">Beach Road, Sekondi-Takoradi, Ghana</p>
        </div>

        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              Facebook
            </a>
          </li>
        </ul>

        <p className="text-xs text-cream/50">
          &copy; {new Date().getFullYear()} Baduwa Locs &amp; Naturals. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
