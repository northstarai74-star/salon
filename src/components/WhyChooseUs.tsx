import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { whyChooseUsIcons } from "@/components/icons";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Every Detail, Considered"
          description="Luxury isn't an aesthetic here — it's the standard behind every appointment, from your first consultation to your final style."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = whyChooseUsIcons[item.icon];
            return (
              <RevealOnScroll key={item.id} delay={(index % 3) * 90}>
                <div className="flex flex-col items-start gap-4 border-t border-charcoal/10 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/50 text-taupe-dark">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <h3 className="font-serif-display text-lg text-charcoal">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/65">{item.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
