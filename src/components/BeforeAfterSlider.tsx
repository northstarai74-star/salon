"use client";

import Image from "next/image";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export function BeforeAfterSlider({ before, after, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(50);

  return (
    <div className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden bg-charcoal">
      <Image src={after} alt={afterAlt} fill sizes="(min-width: 1024px) 44vw, 92vw" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill sizes="(min-width: 1024px) 44vw, 92vw" className="object-cover" draggable={false} />
      </div>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${percent}%` }}>
        <div className="h-full w-px bg-ivory/90" />
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-charcoal shadow-lg">
          <IconChevronLeft className="h-3 w-3" />
          <IconChevronRight className="h-3 w-3" />
        </div>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 bg-charcoal/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-ivory">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-charcoal/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-ivory">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={percent}
        onChange={(event) => setPercent(Number(event.target.value))}
        aria-label={`Drag to compare before and after: ${beforeAlt}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
