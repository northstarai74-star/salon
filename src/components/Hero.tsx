"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { IconStar } from "@/components/icons";
import { useBookingModal } from "@/components/booking/BookingModalProvider";

export function Hero() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      <Image
        src="/images/hero-salon.svg"
        alt="Interior of Lumière Hair & Beauty Studio bathed in warm, editorial light"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 sm:pb-24 lg:px-12 lg:pb-28">
        <p className="mb-6 text-xs uppercase tracking-[0.32em] text-champagne-soft opacity-0 animate-fade-up">
          {"New York · Est. 2012"}
        </p>
        <h1
          className="max-w-3xl font-serif-display text-[clamp(2.6rem,6vw,5.25rem)] font-medium leading-[1.05] text-ivory opacity-0 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Where Your Best Look Begins
        </h1>
        <p
          className="mt-6 max-w-xl text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-ivory/80 opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Exceptional hair, beauty, and personalised care — created around you.
        </p>

        <div className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row" style={{ animationDelay: "320ms" }}>
          <Button variant="champagne" size="lg" onClick={() => openBookingModal()}>
            Book an Appointment
          </Button>
          <Button variant="outline-light" size="lg" href="#services">
            Explore Services
          </Button>
        </div>

        <div
          className="mt-14 flex items-center gap-3 border-t border-ivory/15 pt-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "440ms" }}
        >
          <div className="flex items-center gap-1 text-champagne-soft" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-3.5 w-3.5" />
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.14em] text-ivory/65">
            Trusted by clients who value exceptional beauty experiences
          </p>
        </div>
      </div>
    </section>
  );
}
