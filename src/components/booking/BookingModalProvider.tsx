"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { IconClose } from "@/components/icons";
import { BookingWidget } from "./BookingWidget";

interface BookingModalOptions {
  serviceId?: string;
  stylistId?: string;
}

interface BookingModalContextValue {
  openBookingModal: (options?: BookingModalOptions) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [preset, setPreset] = useState<BookingModalOptions>({});
  const [instanceKey, setInstanceKey] = useState(0);

  const openBookingModal = useCallback((options?: BookingModalOptions) => {
    setPreset(options ?? {});
    setInstanceKey((k) => k + 1);
    dialogRef.current?.showModal();
  }, []);

  const closeBookingModal = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      document.body.style.overflow = "";
    };
    const handleOpen = () => {
      document.body.style.overflow = "hidden";
    };
    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("show" as never, handleOpen);
    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("show" as never, handleOpen);
    };
  }, []);

  return (
    <BookingModalContext.Provider value={{ openBookingModal, closeBookingModal }}>
      {children}
      <dialog
        ref={dialogRef}
        id="booking-dialog"
        aria-labelledby="booking-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeBookingModal();
        }}
      >
        <div className="flex min-h-full items-start justify-center overflow-y-auto px-4 py-8 sm:items-center">
          <div className="w-[min(760px,100%)] bg-ivory shadow-2xl">
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5 sm:px-10">
              <h2 id="booking-dialog-title" className="font-serif-display text-xl text-charcoal">
                Book Your Appointment
              </h2>
              <button
                type="button"
                onClick={closeBookingModal}
                aria-label="Close booking dialog"
                className="flex h-9 w-9 items-center justify-center text-charcoal/60 transition-colors hover:text-charcoal"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <BookingWidget key={instanceKey} initialServiceId={preset.serviceId} initialStylistId={preset.stylistId} />
          </div>
        </div>
      </dialog>
    </BookingModalContext.Provider>
  );
}
