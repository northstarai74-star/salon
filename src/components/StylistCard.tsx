"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { useBookingModal } from "@/components/booking/BookingModalProvider";
import type { Stylist } from "@/lib/types";

export function StylistCard({ stylist }: { stylist: Stylist }) {
  const { openBookingModal } = useBookingModal();

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={stylist.image}
          alt={`Portrait of ${stylist.name}, ${stylist.position} at Lumière Hair & Beauty Studio`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
      </div>

      <div className="pt-5">
        <h3 className="font-serif-display text-xl text-charcoal">{stylist.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-taupe-dark">{stylist.position}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${stylist.name}'s specialties`}>
          {stylist.specialties.map((specialty) => (
            <li key={specialty} className="border border-charcoal/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-charcoal/60">
              {specialty}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{stylist.bio}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href={`/stylists/${stylist.slug}`}
            className="border-b border-charcoal/30 pb-0.5 text-xs uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-champagne hover:text-taupe-dark"
          >
            View Profile
          </Link>
          <Button variant="text" onClick={() => openBookingModal({ stylistId: stylist.id })}>
            Book With {stylist.name.split(" ")[0]}
          </Button>
        </div>
      </div>
    </article>
  );
}
