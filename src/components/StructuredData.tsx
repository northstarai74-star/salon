import { salon } from "@/lib/salon";
import { services } from "@/lib/data";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: salon.name,
    description: salon.description,
    url: salon.url,
    image: `${salon.url}/images/hero-salon.svg`,
    telephone: salon.phone,
    email: salon.email,
    priceRange: "$$-$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: salon.address.street,
      addressLocality: salon.address.locality,
      addressRegion: salon.address.region,
      postalCode: salon.address.postalCode,
      addressCountry: salon.address.country,
    },
    openingHoursSpecification: salon.hoursStructured.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes,
    })),
    sameAs: [salon.instagramUrl],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
      priceCurrency: "USD",
      price: service.priceFrom,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
