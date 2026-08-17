"use client";

import { cn } from "@/lib/cn";

export interface GalleryFilterOption {
  value: string;
  label: string;
}

interface GalleryFilterProps {
  options: GalleryFilterOption[];
  active: string;
  onChange: (value: string) => void;
}

export function GalleryFilter({ options, active, onChange }: GalleryFilterProps) {
  return (
    <div role="tablist" aria-label="Filter gallery by category" className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          role="tab"
          type="button"
          aria-selected={active === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "border px-5 py-2 text-xs uppercase tracking-[0.14em] transition-colors",
            active === option.value
              ? "border-charcoal bg-charcoal text-ivory"
              : "border-charcoal/20 text-charcoal/70 hover:border-charcoal hover:text-charcoal"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
