"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useBookingModal } from "@/components/booking/BookingModalProvider";
import { featuredServices } from "@/lib/data";
import { cn } from "@/lib/cn";

export function FeaturedServices() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="bg-charcoal px-6 py-24 text-ivory lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-champagne-soft">Signature Edit</p>
          <h2 className="font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] text-ivory">
            The Services We&rsquo;re Known For
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {featuredServices.map((item, index) => (
            <RevealOnScroll key={item.id}>
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
                <div
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden lg:col-span-7 lg:aspect-[16/11]",
                    item.align === "right" ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} — signature service at Lumière Hair & Beauty Studio`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 60vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className={cn("lg:col-span-5", item.align === "right" ? "lg:order-1" : "lg:order-2")}>
                  <span className="font-serif-display text-sm text-champagne-soft/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-champagne-soft">{item.kicker}</p>
                  <h3 className="mt-3 font-serif-display text-3xl text-ivory sm:text-4xl">{item.name}</h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-ivory/70">{item.description}</p>
                  <div className="mt-6 flex items-center gap-6 text-sm text-ivory/60">
                    <span>From ${item.priceFrom}</span>
                    <span>{item.duration}</span>
                  </div>
                  <Button
                    variant="outline-light"
                    size="md"
                    className="mt-8"
                    onClick={() => openBookingModal({ serviceId: item.serviceId })}
                  >
                    Book This Service
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
