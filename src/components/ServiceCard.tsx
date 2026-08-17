"use client";

import Image from "next/image";
import { IconClock } from "@/components/icons";
import { useBookingModal } from "@/components/booking/BookingModalProvider";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  const { openBookingModal } = useBookingModal();

  return (
    <article className="group flex flex-col border border-charcoal/10 bg-ivory transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(33,29,26,0.25)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} at Lumière Hair & Beauty Studio`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-charcoal">
          {service.categoryLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif-display text-xl text-charcoal">{service.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-charcoal/65">{service.description}</p>
        <div className="flex items-center justify-between border-t border-charcoal/10 pt-4 text-sm text-charcoal/70">
          <span>From ${service.priceFrom}</span>
          <span className="flex items-center gap-1.5">
            <IconClock className="h-3.5 w-3.5" /> {service.duration}
          </span>
        </div>
        <button
          type="button"
          onClick={() => openBookingModal({ serviceId: service.id })}
          className="mt-1 border-b border-charcoal/30 pb-1 text-left text-xs uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-champagne hover:text-taupe-dark"
        >
          Book Service
        </button>
      </div>
    </article>
  );
}
