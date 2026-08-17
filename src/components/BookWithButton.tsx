"use client";

import { Button } from "@/components/Button";
import { useBookingModal } from "@/components/booking/BookingModalProvider";

export function BookWithButton({ stylistId, stylistName }: { stylistId: string; stylistName: string }) {
  const { openBookingModal } = useBookingModal();
  return (
    <Button variant="champagne" size="lg" onClick={() => openBookingModal({ stylistId })}>
      Book With {stylistName.split(" ")[0]}
    </Button>
  );
}
