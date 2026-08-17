import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/salon";

export const metadata: Metadata = {
  title: `Privacy Policy | ${salon.name}`,
  description: `How ${salon.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: `${salon.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ivory pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        <Link href="/" className="text-xs uppercase tracking-[0.14em] text-charcoal/60 hover:text-charcoal">
          ← Back to Home
        </Link>
        <h1 className="mt-6 font-serif-display text-4xl text-charcoal">Privacy Policy</h1>
        <p className="mt-3 text-sm text-charcoal/50">Last updated: January 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-charcoal/75">
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Information We Collect</h2>
            <p className="mt-3">
              When you book an appointment, contact us, or subscribe to updates, we collect information such as your
              name, email address, phone number, and any preferences or notes you share with your stylist. We do not
              collect payment card details through this website.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">How We Use Your Information</h2>
            <p className="mt-3">
              We use the information you provide to schedule and confirm appointments, communicate with you about your
              visit, and improve our services. We do not sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Booking Providers</h2>
            <p className="mt-3">
              Appointment requests submitted through this site are handled by our front-desk team. If we connect this
              site to a third-party scheduling platform in the future, that provider&rsquo;s privacy practices will
              also apply to the booking information you submit, and we will update this policy accordingly.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Cookies</h2>
            <p className="mt-3">
              This website uses minimal, functional cookies necessary for the site to operate. We do not use
              third-party advertising trackers.
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal information at any time by
              contacting us at{" "}
              <a href={`mailto:${salon.email}`} className="underline underline-offset-4 hover:text-taupe-dark">
                {salon.email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="font-serif-display text-xl text-charcoal">Contact Us</h2>
            <p className="mt-3">
              Questions about this policy can be directed to {salon.name} at {salon.address.street},{" "}
              {salon.address.locality}, {salon.address.region} {salon.address.postalCode}, or by phone at{" "}
              {salon.phone}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
