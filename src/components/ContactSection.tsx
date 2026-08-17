import { SectionHeading } from "@/components/SectionHeading";
import { LocationMap } from "@/components/LocationMap";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/Button";
import { IconClock, IconMail, IconNavigation, IconPhone, IconPin } from "@/components/icons";
import { salon } from "@/lib/salon";

export function ContactSection() {
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(salon.mapsQuery)}`;

  return (
    <section id="contact" className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading eyebrow="Visit Us" title="Find the Studio" align="left" />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <RevealOnScroll className="flex flex-col gap-10">
            <div className="flex gap-4">
              <IconPin className="h-5 w-5 shrink-0 text-taupe-dark" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/45">Address</p>
                <p className="mt-1 text-base text-charcoal">
                  {salon.address.street}
                  <br />
                  {salon.address.locality}, {salon.address.region} {salon.address.postalCode}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconPhone className="h-5 w-5 shrink-0 text-taupe-dark" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/45">Phone</p>
                <a href={salon.phoneHref} className="mt-1 block text-base text-charcoal hover:text-taupe-dark">
                  {salon.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <IconMail className="h-5 w-5 shrink-0 text-taupe-dark" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/45">Email</p>
                <a href={`mailto:${salon.email}`} className="mt-1 block text-base text-charcoal hover:text-taupe-dark">
                  {salon.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <IconClock className="h-5 w-5 shrink-0 text-taupe-dark" />
              <div className="w-full">
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/45">Opening Hours</p>
                <dl className="mt-2 grid max-w-xs grid-cols-2 gap-y-1.5 text-sm text-charcoal/75">
                  {salon.hours.map((entry) => (
                    <div key={entry.day} className="contents">
                      <dt>{entry.day}</dt>
                      <dd className="text-right text-charcoal/60">{entry.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex gap-4">
              <IconNavigation className="h-5 w-5 shrink-0 text-taupe-dark" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/45">Parking</p>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-charcoal/70">{salon.parking}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="solid" href={directionsHref} target="_blank" rel="noreferrer">
                Get Directions
              </Button>
              <Button variant="outline" href={salon.phoneHref}>
                Call Now
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <LocationMap />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
