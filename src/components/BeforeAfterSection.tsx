import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { beforeAfterItems } from "@/lib/data";

export function BeforeAfterSection() {
  return (
    <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Real Results"
          title="Before & After"
          description="Drag the slider to see the transformation — every result achieved in a single studio visit."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {beforeAfterItems.map((item, index) => (
            <RevealOnScroll key={item.id} delay={(index % 2) * 100}>
              <div>
                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                  beforeAlt={`${item.title} — before`}
                  afterAlt={`${item.title} — after`}
                />
                <div className="mt-6">
                  <h3 className="font-serif-display text-xl text-charcoal">{item.title}</h3>
                  <dl className="mt-3 grid grid-cols-3 gap-3 border-t border-charcoal/10 pt-3 text-xs text-charcoal/60">
                    <div>
                      <dt className="uppercase tracking-[0.1em] text-charcoal/40">Service</dt>
                      <dd className="mt-1 text-charcoal/80">{item.service}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.1em] text-charcoal/40">Stylist</dt>
                      <dd className="mt-1 text-charcoal/80">{item.stylist}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.1em] text-charcoal/40">Duration</dt>
                      <dd className="mt-1 text-charcoal/80">{item.duration}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
