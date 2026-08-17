import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const points = ["Relaxation", "Personal Attention", "Premium Service", "Professional Expertise", "Comfortable Environment"];

export function SalonExperience() {
  return (
    <section className="bg-ivory-dim px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <RevealOnScroll className="lg:col-span-7">
          <div className="relative">
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src="/images/salon-interior-01.svg"
                alt="Reception and lounge area of Lumière Hair & Beauty Studio"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden aspect-[4/3] w-[42%] overflow-hidden border-8 border-ivory-dim shadow-xl sm:block">
              <Image
                src="/images/salon-interior-02.svg"
                alt="Styling studio with private stations at Lumière Hair & Beauty Studio"
                fill
                loading="lazy"
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="lg:col-span-5 lg:pl-8" delay={120}>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-taupe-dark">The Studio</p>
          <h2 className="font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] text-charcoal">
            More Than a Salon. An Experience.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">
            From the moment you arrive, every detail is considered — warm lighting, unhurried pacing, and a team
            genuinely invested in how you feel, not just how you look. Our studio was designed as a retreat from the
            everyday: a place to sit back, be truly listened to, and leave looking like the best version of yourself.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-charcoal/75">
                <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
