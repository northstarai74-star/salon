"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight, IconStar } from "@/components/icons";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 7000;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restartTimer]);

  function handleManualNav(next: number) {
    goTo(next);
    restartTimer();
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="bg-charcoal px-6 py-24 text-ivory lg:px-12 lg:py-32"
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
      onMouseLeave={restartTimer}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-champagne-soft">Client Words</p>
        <h2 className="font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] text-ivory">In Their Own Words</h2>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full shrink-0 px-2">
                <div className="flex justify-center gap-1 text-champagne-soft" aria-hidden="true">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-6 font-serif-display text-xl leading-snug text-ivory/95 sm:text-2xl">
                  &ldquo;{testimonial.review}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm uppercase tracking-[0.14em] text-ivory/55">
                  {testimonial.name}
                  {testimonial.service ? ` · ${testimonial.service}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => handleManualNav(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center text-ivory/70 hover:text-champagne-soft"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => handleManualNav(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={cn("h-1.5 rounded-full transition-all", i === index ? "w-6 bg-champagne-soft" : "w-1.5 bg-ivory/30")}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleManualNav(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center text-ivory/70 hover:text-champagne-soft"
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
