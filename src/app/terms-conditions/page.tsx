import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/salon";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${salon.name}`,
  description: `Booking, cancellation, and studio policies for ${salon.name}.`,
  alternates: { canonical: `${salon.url}/terms-conditions` },
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-ivory pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        <Link href="/" className="text-xs uppercase tracking-[0.14em] text-charcoal/60 hover:text-charcoal">
          ← Back to Home
        </Link>
        <h1 className="mt-6 font-serif-display text-4xl text-charcoal">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-charcoal/50">Last updated: January 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-charcoal/75">
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Appointments</h2>
            <p className="mt-3">
              Appointment requests submitted through this website are reviewed and confirmed by our front-desk team.
              A request is not guaranteed until you receive confirmation by phone or email.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Cancellations &amp; Rescheduling</h2>
            <p className="mt-3">
              We kindly ask for at least 24 hours&rsquo; notice to cancel or reschedule an appointment. Late
              cancellations or missed appointments may be subject to a cancellation fee at our discretion.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Pricing</h2>
            <p className="mt-3">
              Prices listed on this site reflect our starting rates and may vary based on hair length, density, and
              the specific service performed. Your stylist will confirm final pricing during your consultation.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Patch Tests</h2>
            <p className="mt-3">
              A patch test may be required at least 48 hours before select colour services for new clients or clients
              returning after 6 months, in line with standard salon safety practice.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Website Use</h2>
            <p className="mt-3">
              The content on this website is provided for informational purposes about {salon.name} and its services.
              We update imagery and pricing periodically to reflect our current offering.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Contact</h2>
            <p className="mt-3">
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${salon.email}`} className="underline underline-offset-4 hover:text-taupe-dark">
                {salon.email}
              </a>{" "}
              or {salon.phone}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
