import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { services } from "@/lib/data";

export function ServiceGrid() {
  return (
    <section id="services" className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Crafted Around You"
          description="Every service begins with a consultation — because the right cut, colour, or treatment depends entirely on you."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={(index % 3) * 90}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
