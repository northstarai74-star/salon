export const salon = {
  name: "Lumière Hair & Beauty Studio",
  shortName: "Lumière",
  tagline: "Hair & Beauty Atelier",
  description:
    "An intimate luxury hair and beauty atelier offering precision cutting, artisan colour, and personalised beauty rituals in the heart of the city.",
  url: "https://www.lumiere-studio.com",
  phone: "+1 (212) 555-0142",
  phoneHref: "tel:+12125550142",
  email: "hello@lumiere-studio.com",
  instagramHandle: "@lumiere.studio",
  instagramUrl: "https://www.instagram.com/lumiere.studio",
  address: {
    street: "482 Madison Avenue, Suite 3",
    locality: "New York",
    region: "NY",
    postalCode: "10022",
    country: "US",
  },
  mapsQuery: "482 Madison Avenue, New York, NY 10022",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "9:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
    { day: "Thursday", time: "9:00 AM – 8:00 PM" },
    { day: "Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  parking: "Complimentary valet parking available after 4pm, with metered street parking and the Madison Ave. municipal garage two doors down.",
  hoursStructured: [
    { dayOfWeek: "Tuesday", opens: "09:00", closes: "20:00" },
    { dayOfWeek: "Wednesday", opens: "09:00", closes: "20:00" },
    { dayOfWeek: "Thursday", opens: "09:00", closes: "20:00" },
    { dayOfWeek: "Friday", opens: "09:00", closes: "20:00" },
    { dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
    { dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Stylists", href: "/#stylists" },
  { label: "Contact", href: "/#contact" },
] as const;
