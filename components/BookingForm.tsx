"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Sisterlocks Installation",
  "Traditional Locs Retwist",
  "Interlocking / Rootlocks",
  "Micro Twists",
  "Rasta Braids",
  "Boho Box Braids",
  "Crochet Style",
  "Natural Cut & Texture Definition",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold/30 bg-cream-dim p-8">
        <p className="font-display text-2xl italic text-ink">
          Request received.
        </p>
        <p className="mt-3 text-umber">
          Thank you for reaching out to Baduwa Locs &amp; Naturals. We&rsquo;ll
          confirm your appointment by phone or WhatsApp within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-clay/20 bg-cream-dim p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm text-umber">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border-b border-clay/30 bg-transparent py-2 text-ink outline-none focus:border-gold"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm text-umber">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="024 XXX XXXX"
            className="border-b border-clay/30 bg-transparent py-2 text-ink outline-none focus:border-gold"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="service" className="text-sm text-umber">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="border-b border-clay/30 bg-transparent py-2 text-ink outline-none focus:border-gold"
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="date" className="text-sm text-umber">
            Preferred date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="border-b border-clay/30 bg-transparent py-2 text-ink outline-none focus:border-gold"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="time" className="text-sm text-umber">
            Preferred time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            className="border-b border-clay/30 bg-transparent py-2 text-ink outline-none focus:border-gold"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-sm bg-ink py-3.5 text-cream transition-colors hover:bg-umber sm:w-auto sm:px-10"
      >
        Request appointment
      </button>
    </form>
  );
}
