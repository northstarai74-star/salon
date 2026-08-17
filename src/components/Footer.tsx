import Link from "next/link";
import { FooterBookButton } from "@/components/FooterBookButton";
import { IconInstagram, IconMail, IconPhone } from "@/components/icons";
import { navLinks, salon } from "@/lib/salon";
import { services } from "@/lib/data";

const uniqueServiceCategories = Array.from(new Map(services.map((s) => [s.category, s.categoryLabel])).values());

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal px-6 pt-20 text-ivory lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="font-serif-display text-2xl tracking-[0.06em] text-ivory">{salon.shortName.toUpperCase()}</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">{salon.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={salon.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Lumière on Instagram"
                className="flex h-9 w-9 items-center justify-center border border-ivory/20 text-ivory/70 hover:border-champagne hover:text-champagne-soft"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8">
              <FooterBookButton />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ivory/45">Navigate</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ivory/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-champagne-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/booking" className="hover:text-champagne-soft">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ivory/45">Services</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ivory/70">
              {uniqueServiceCategories.map((label) => (
                <li key={label}>
                  <Link href="/#services" className="hover:text-champagne-soft">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ivory/45">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ivory/70">
              <li>
                {salon.address.street}, {salon.address.locality}, {salon.address.region} {salon.address.postalCode}
              </li>
              <li>
                <a href={salon.phoneHref} className="flex items-center gap-2 hover:text-champagne-soft">
                  <IconPhone className="h-3.5 w-3.5" /> {salon.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${salon.email}`} className="flex items-center gap-2 hover:text-champagne-soft">
                  <IconMail className="h-3.5 w-3.5" /> {salon.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-ivory/45">Hours</p>
            <ul className="mt-3 flex flex-col gap-1 text-xs text-ivory/55">
              {salon.hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span>{entry.day}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ivory/10 py-8 text-xs text-ivory/45 sm:flex-row">
          <p>
            © {year} {salon.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-ivory/80">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-ivory/80">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
