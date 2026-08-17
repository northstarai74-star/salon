"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { IconMenu } from "@/components/icons";
import { MobileNavbar } from "@/components/MobileNavbar";
import { useBookingModal } from "@/components/booking/BookingModalProvider";
import { navLinks, salon } from "@/lib/salon";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBookingModal } = useBookingModal();
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = hasDarkHero && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[padding,background-color,box-shadow] duration-300 ease-out",
          scrolled || !hasDarkHero
            ? "bg-ivory/95 py-3 shadow-[0_1px_0_rgba(33,29,26,0.08)] backdrop-blur-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <Link
            href="/#home"
            className={cn(
              "font-serif-display text-xl tracking-[0.08em] transition-colors sm:text-2xl",
              dark ? "text-ivory" : "text-charcoal"
            )}
          >
            {salon.shortName.toUpperCase()}
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.16em] transition-colors",
                  dark ? "text-ivory/85 hover:text-champagne-soft" : "text-charcoal/80 hover:text-taupe-dark"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant={dark ? "outline-light" : "solid"} size="sm" onClick={() => openBookingModal()}>
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className={cn("flex h-10 w-10 items-center justify-center lg:hidden", dark ? "text-ivory" : "text-charcoal")}
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <MobileNavbar open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
