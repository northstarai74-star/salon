import type { Metadata } from "next";
import Link from "next/link";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { salon } from "@/lib/salon";

export const metadata: Metadata = {
  title: `Book an Appointment | ${salon.name}`,
  description: `Book your hair or beauty appointment at ${salon.name} in minutes. Choose your service, stylist, date, and time.`,
  alternates: { canonical: `${salon.url}/booking` },
};

interface BookingPageProps {
  searchParams: Promise<{ service?: string; stylist?: string }>;
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const { service, stylist } = await searchParams;

  return (
    <main className="min-h-screen bg-ivory-dim pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Link href="/" className="text-xs uppercase tracking-[0.14em] text-charcoal/60 hover:text-charcoal">
          ← Back to Home
        </Link>
        <h1 className="mt-6 font-serif-display text-4xl text-charcoal sm:text-5xl">Book Your Appointment</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/65">
          Reserve your visit to {salon.name} in a few simple steps. Our front desk will confirm your appointment by
          phone or email.
        </p>

        <div className="mt-12 border border-charcoal/10 bg-ivory shadow-[0_32px_64px_-32px_rgba(33,29,26,0.2)]">
          <BookingWidget initialServiceId={service} initialStylistId={stylist} />
        </div>
      </div>
    </main>
  );
}
