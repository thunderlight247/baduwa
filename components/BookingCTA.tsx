import BookingForm from "./BookingForm";

const hours = [
  ["Monday", "Closed"],
  ["Tuesday \u2013 Friday", "9:00am \u2013 6:30pm"],
  ["Saturday", "8:00am \u2013 7:00pm"],
  ["Sunday", "10:00am \u2013 4:00pm"],
];

export default function BookingCTA() {
  return (
    <section id="booking" className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="font-display italic text-clay">Visit the salon</p>
          <h2 className="mt-3 text-balance font-display text-3xl text-ink sm:text-4xl">
            Beach Road, Sekondi-Takoradi
          </h2>
          <p className="mt-4 max-w-prose text-umber">
            Western Region, Ghana. Walk-ins are welcome between styles, but a
            reserved slot guarantees your stylist and your preferred time.
          </p>

          <dl className="mt-10 space-y-3 border-t border-clay/15 pt-6">
            {hours.map(([day, time]) => (
              <div key={day} className="flex justify-between text-sm">
                <dt className="text-umber">{day}</dt>
                <dd className="text-ink">{time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/233246471181"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-[#25D366]/90 px-6 py-3.5 text-center text-white transition-colors hover:bg-[#25D366]"
            >
              WhatsApp &middot; 024 647 1181
            </a>
            <a
              href="tel:+233240098753"
              className="rounded-sm border border-clay/40 px-6 py-3.5 text-center text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Call &middot; 024 009 8753
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl text-ink">
            Request an appointment
          </h3>
          <p className="mt-2 text-sm text-umber">
            Tell us what you&rsquo;re after and we&rsquo;ll confirm your slot
            directly.
          </p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
