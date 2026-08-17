"use client";

import Image from "next/image";
import { useEffect } from "react";
import { IconChevronLeft, IconChevronRight, IconClose } from "@/components/icons";
import type { GalleryItem } from "@/lib/types";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex flex-col bg-charcoal/96 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-6 py-5 text-ivory sm:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-ivory/60">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery viewer"
          className="flex h-10 w-10 items-center justify-center hover:text-champagne-soft"
        >
          <IconClose className="h-6 w-6" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + items.length) % items.length)}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory hover:text-champagne-soft sm:left-6"
        >
          <IconChevronLeft className="h-7 w-7" />
        </button>

        <figure className="relative flex h-full max-h-[74vh] w-full max-w-4xl items-center justify-center">
          <div className="relative h-full max-h-[74vh] w-full">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 92vw"
              className="object-contain"
            />
          </div>
        </figure>

        <button
          type="button"
          onClick={() => onNavigate((index + 1) % items.length)}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory hover:text-champagne-soft sm:right-6"
        >
          <IconChevronRight className="h-7 w-7" />
        </button>
      </div>

      <figcaption className="pb-8 text-center text-sm uppercase tracking-[0.14em] text-ivory/70">
        {item.title}
      </figcaption>
    </div>
  );
}
