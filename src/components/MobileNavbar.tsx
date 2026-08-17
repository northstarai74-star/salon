"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/Button";
import { IconClose, IconInstagram, IconPhone } from "@/components/icons";
import { useBookingModal } from "@/components/booking/BookingModalProvider";
import { navLinks, salon } from "@/lib/salon";
import { cn } from "@/lib/cn";

interface MobileNavbarProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavbar({ open, onClose }: MobileNavbarProps) {
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (!open) document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
      <div
        className={cn("absolute inset-0 bg-charcoal/60 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-ivory p-8 shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <span className="font-serif-display text-xl tracking-[0.06em] text-charcoal">{salon.shortName.toUpperCase()}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center text-charcoal/70 hover:text-charcoal"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-serif-display text-[1.7rem] leading-none text-charcoal transition-colors hover:text-taupe-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="solid"
          size="lg"
          className="mt-10 w-full"
          onClick={() => {
            onClose();
            openBookingModal();
          }}
        >
          Book Appointment
        </Button>

        <div className="mt-auto flex flex-col gap-3 pt-12 text-sm text-charcoal/60">
          <a href={salon.phoneHref} className="flex items-center gap-2 hover:text-charcoal">
            <IconPhone className="h-4 w-4" /> {salon.phone}
          </a>
          <a
            href={salon.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-charcoal"
          >
            <IconInstagram className="h-4 w-4" /> {salon.instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}
