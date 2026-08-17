"use client";

import { Button } from "@/components/Button";
import { IconPhone } from "@/components/icons";
import { useBookingModal } from "@/components/booking/BookingModalProvider";
import { salon } from "@/lib/salon";

export function MobileBookBar() {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 border-t border-charcoal/10 bg-ivory/95 px-4 py-3 backdrop-blur-sm lg:hidden">
      <a
        href={salon.phoneHref}
        aria-label={`Call ${salon.name}`}
        className="flex h-12 w-12 shrink-0 items-center justify-center border border-charcoal/20 text-charcoal"
      >
        <IconPhone className="h-4 w-4" />
      </a>
      <Button variant="solid" className="flex-1" onClick={() => openBookingModal()}>
        Book Appointment
      </Button>
    </div>
  );
}
