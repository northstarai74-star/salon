import { SectionHeading } from "@/components/SectionHeading";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { IconPhone } from "@/components/icons";
import { salon } from "@/lib/salon";

export function BookingSection() {
  return (
    <section id="booking" className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading eyebrow="Book Online" title="Ready for Your Next Look?" description="Reserve your appointment in minutes — choose your service, stylist, and time below." />

        <RevealOnScroll className="mx-auto mt-14 max-w-3xl border border-charcoal/10 shadow-[0_32px_64px_-32px_rgba(33,29,26,0.2)]">
          <BookingWidget />
        </RevealOnScroll>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-charcoal/60">
          <IconPhone className="h-4 w-4" /> Prefer to book by phone? Call us at{" "}
          <a href={salon.phoneHref} className="text-charcoal underline underline-offset-4 hover:text-taupe-dark">
            {salon.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
