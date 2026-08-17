import Image from "next/image";
import { Button } from "@/components/Button";
import { IconInstagram } from "@/components/icons";
import { salon } from "@/lib/salon";

const socialImages = Array.from({ length: 8 }, (_, i) => ({
  id: `social-${String(i + 1).padStart(2, "0")}`,
  src: `/images/social-${String(i + 1).padStart(2, "0")}.svg`,
}));

export function SocialGallery() {
  return (
    <section className="bg-ivory-dim px-6 py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px] text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-taupe-dark">{salon.instagramHandle}</p>
        <h2 className="font-serif-display text-[clamp(1.7rem,3vw,2.5rem)] text-charcoal">Follow Our Work</h2>
        <Button variant="outline" size="sm" href={salon.instagramUrl} target="_blank" rel="noreferrer" className="mt-6">
          <IconInstagram className="h-4 w-4" /> Follow on Instagram
        </Button>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {socialImages.map((image) => (
            <a
              key={image.id}
              href={salon.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden"
              aria-label="View on Instagram"
            >
              <Image
                src={image.src}
                alt="Salon work shared on Instagram"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 12vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 text-ivory opacity-0 transition-all duration-300 group-hover:bg-charcoal/40 group-hover:opacity-100">
                <IconInstagram className="h-5 w-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
