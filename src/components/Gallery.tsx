"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryFilter } from "@/components/GalleryFilter";
import { Lightbox } from "@/components/Lightbox";
import { galleryItems } from "@/lib/data";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "haircuts", label: "Haircuts" },
  { value: "colour", label: "Colour" },
  { value: "styling", label: "Styling" },
  { value: "bridal", label: "Bridal" },
];

export function Gallery() {
  const [active, setActive] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="bg-ivory-dim px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Our Work"
          title="A Portfolio of Transformations"
          description="Browse recent work from our studio — every look shaped by a real consultation and a real client."
        />

        <div className="mt-12">
          <GalleryFilter
            options={FILTERS}
            active={active}
            onChange={(value) => {
              setActive(value);
              setOpenIndex(null);
            }}
          />
        </div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative mb-4 block w-full overflow-hidden break-inside-avoid text-left"
              aria-label={`Open ${item.title} in gallery viewer`}
            >
              <div className={item.tall ? "relative aspect-[3/4]" : "relative aspect-[4/5]"}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 46vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-4 text-xs uppercase tracking-[0.14em] text-ivory">{item.title}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null ? (
        <Lightbox items={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      ) : null}
    </section>
  );
}
