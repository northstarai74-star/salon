import { SectionHeading } from "@/components/SectionHeading";
import { StylistCard } from "@/components/StylistCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { stylists } from "@/lib/data";

export function StylistsSection() {
  return (
    <section id="stylists" className="bg-ivory-dim px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="The Hands Behind Every Look"
          description="A close-knit team of specialists, each trained across different disciplines so every client finds their perfect match."
        />
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {stylists.map((stylist, index) => (
            <RevealOnScroll key={stylist.id} delay={(index % 3) * 90}>
              <StylistCard stylist={stylist} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
