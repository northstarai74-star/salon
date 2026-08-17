"use client";

import { Button } from "@/components/Button";
import { useBookingModal } from "@/components/booking/BookingModalProvider";

export function FooterBookButton() {
  const { openBookingModal } = useBookingModal();
  return (
    <Button variant="champagne" size="sm" onClick={() => openBookingModal()}>
      Book Appointment
    </Button>
  );
}
