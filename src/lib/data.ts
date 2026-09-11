import type {
  BeforeAfterItem,
  FeaturedService,
  GalleryItem,
  Service,
  Stylist,
  Testimonial,
  WhyChooseUsItem,
} from "./types";

export const services: Service[] = [
  {
    id: "svc-cut-style",
    category: "haircuts-styling",
    categoryLabel: "Haircuts & Styling",
    name: "Precision Cut & Style",
    description:
      "A tailored consultation and precision cut finished with a signature blow-dry, shaped to your face and lifestyle.",
    priceFrom: 85,
    duration: "45–60 min",
    image: "/images/service-haircuts-styling.svg",
  },
  {
    id: "svc-colour",
    category: "hair-colour",
    categoryLabel: "Hair Colour",
    name: "Full Colour Application",
    description:
      "Rich, dimensional single-process colour custom-blended in-studio to complement your skin tone.",
    priceFrom: 120,
    duration: "90–120 min",
    image: "/images/service-hair-colour.svg",
  },
  {
    id: "svc-balayage",
    category: "highlights-balayage",
    categoryLabel: "Highlights & Balayage",
    name: "Hand-Painted Balayage",
    description:
      "Freehand, hand-painted lightening for soft, sun-kissed dimension that grows out gracefully.",
    priceFrom: 180,
    duration: "2–3 hrs",
    image: "/images/service-highlights-balayage.svg",
  },
  {
    id: "svc-treatment",
    category: "hair-treatments",
    categoryLabel: "Hair Treatments",
    name: "Deep Repair Ritual",
    description:
      "An intensive bond-rebuilding treatment restoring strength, shine, and softness after colour or heat damage.",
    priceFrom: 95,
    duration: "45 min",
    image: "/images/service-hair-treatments.svg",
  },
  {
    id: "svc-bridal",
    category: "bridal-occasion",
    categoryLabel: "Bridal & Occasion",
    name: "Bridal Styling Package",
    description:
      "A private trial and wedding-day styling experience, including preview consultation and touch-up kit.",
    priceFrom: 250,
    duration: "2 hrs",
    image: "/images/service-bridal-occasion.svg",
  },
  {
    id: "svc-beauty",
    category: "beauty-services",
    categoryLabel: "Beauty Services",
    name: "Signature Blow-Dry & Makeup",
    description:
      "Editorial-finish blow-dry paired with a polished makeup application for events and everyday elegance.",
    priceFrom: 70,
    duration: "45 min",
    image: "/images/service-beauty-services.svg",
  },
];

export const featuredServices: FeaturedService[] = [
  {
    id: "feat-balayage",
    serviceId: "svc-balayage",
    name: "Signature Balayage",
    kicker: "Our Most-Requested Colour Service",
    description:
      "A hand-painted lightening technique layered in freehand strokes for dimension that looks sun-kissed, not striped. Every application is custom-mapped to your natural base, cut, and undertone by our master colourists.",
    priceFrom: 180,
    duration: "2–3 hrs",
    image: "/images/luxe-styling-station.jpg",
    align: "left",
  },
  {
    id: "feat-haircut",
    serviceId: "svc-cut-style",
    name: "Precision Haircut",
    kicker: "The Foundation of Every Great Look",
    description:
      "Cut dry-first and refined wet, our precision method is built around how your hair actually falls and moves — not a one-size template. It's the difference between a haircut that photographs well and one that lives well.",
    priceFrom: 85,
    duration: "45–60 min",
    image: "/images/luxe-salon-interior.jpg",
    align: "right",
  },
  {
    id: "feat-treatment",
    serviceId: "svc-treatment",
    name: "Luxury Hair Treatment",
    kicker: "Restoration From the Inside Out",
    description:
      "A bond-level repair ritual using professional-grade actives to rebuild strength strand by strand, leaving hair visibly smoother, glossier, and easier to style at home.",
    priceFrom: 95,
    duration: "45 min",
    image: "/images/luxe-reception.jpg",
    align: "left",
  },
  {
    id: "feat-bridal",
    serviceId: "svc-bridal",
    name: "Bridal Styling",
    kicker: "For Your Most Photographed Day",
    description:
      "From trial to 'I do', our bridal specialists design a look that holds through every embrace, every dance, and every photograph — with a private in-studio experience for you and your party.",
    priceFrom: 250,
    duration: "2 hrs",
    image: "/images/luxe-featured.jpg",
    align: "right",
  },
];

export const galleryItems: GalleryItem[] = [
  { id: "g-haircut-1", category: "haircuts", title: "Work Sample 1", image: "/images/gallery-work-01.jpg", alt: "Professional hair work sample", tall: true },
  { id: "g-haircut-2", category: "haircuts", title: "Work Sample 2", image: "/images/gallery-work-02.jpg", alt: "Professional hair work sample" },
  { id: "g-haircut-3", category: "haircuts", title: "Work Sample 3", image: "/images/gallery-work-03.jpg", alt: "Professional hair work sample", tall: true },
  { id: "g-haircut-4", category: "haircuts", title: "Work Sample 4", image: "/images/gallery-work-04.jpg", alt: "Professional hair work sample" },
  { id: "g-colour-1", category: "colour", title: "Work Sample 5", image: "/images/gallery-work-05.jpg", alt: "Professional hair work sample", tall: true },
  { id: "g-colour-2", category: "colour", title: "Studio Interior", image: "/images/studio-interior.jpg", alt: "Studio interior" },
  { id: "g-colour-3", category: "colour", title: "Work Sample 1", image: "/images/gallery-work-01.jpg", alt: "Professional hair work sample" },
  { id: "g-colour-4", category: "colour", title: "Work Sample 2", image: "/images/gallery-work-02.jpg", alt: "Professional hair work sample", tall: true },
  { id: "g-styling-1", category: "styling", title: "Work Sample 3", image: "/images/gallery-work-03.jpg", alt: "Professional hair work sample" },
  { id: "g-styling-2", category: "styling", title: "Work Sample 4", image: "/images/gallery-work-04.jpg", alt: "Professional hair work sample", tall: true },
  { id: "g-styling-3", category: "styling", title: "Work Sample 5", image: "/images/gallery-work-05.jpg", alt: "Professional hair work sample" },
  { id: "g-styling-4", category: "styling", title: "Studio Interior", image: "/images/studio-interior.jpg", alt: "Studio interior" },
  { id: "g-bridal-1", category: "bridal", title: "Work Sample 1", image: "/images/gallery-work-01.jpg", alt: "Professional hair work sample", tall: true },
  { id: "g-bridal-2", category: "bridal", title: "Work Sample 2", image: "/images/gallery-work-02.jpg", alt: "Professional hair work sample" },
  { id: "g-bridal-3", category: "bridal", title: "Work Sample 3", image: "/images/gallery-work-03.jpg", alt: "Professional hair work sample", tall: true },
  { id: "g-bridal-4", category: "bridal", title: "Work Sample 4", image: "/images/gallery-work-04.jpg", alt: "Professional hair work sample" },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Sun-Kissed Balayage Transformation",
    service: "Hand-Painted Balayage + Gloss",
    stylist: "Aria Chen",
    duration: "2 hrs 30 min",
    before: "/images/before-after-01-before.svg",
    after: "/images/before-after-01-after.svg",
  },
  {
    id: "ba-2",
    title: "Vivid-to-Natural Colour Correction",
    service: "Full Colour Correction",
    stylist: "Marcus Webb",
    duration: "3 hrs",
    before: "/images/before-after-02-before.svg",
    after: "/images/before-after-02-after.svg",
  },
  {
    id: "ba-3",
    title: "Precision Bob Restyle",
    service: "Precision Cut & Style",
    stylist: "Sofia Moreau",
    duration: "50 min",
    before: "/images/before-after-03-before.svg",
    after: "/images/before-after-03-after.svg",
  },
  {
    id: "ba-4",
    title: "Bridal Updo Reveal",
    service: "Bridal Styling Package",
    stylist: "Elena Petrova",
    duration: "1 hr 15 min",
    before: "/images/before-after-04-before.svg",
    after: "/images/before-after-04-after.svg",
  },
];

export const stylists: Stylist[] = [
  {
    id: "st-aria",
    slug: "aria-chen",
    name: "Aria Chen",
    position: "Creative Director & Colour Specialist",
    specialties: ["Balayage", "Vivid Colour", "Colour Correction"],
    bio: "Aria leads our colour studio with 14 years of experience across New York and Paris ateliers. Her freehand balayage work has become the studio's signature.",
    image: "/images/luxe-styling-station.jpg",
  },
  {
    id: "st-marcus",
    slug: "marcus-webb",
    name: "Marcus Webb",
    position: "Senior Stylist",
    specialties: ["Precision Cutting", "Men's Grooming", "Texture"],
    bio: "Marcus trained at London's leading cutting academies and brings an architectural approach to every haircut, prioritising shape that grows out beautifully.",
    image: "/images/luxe-salon-interior.jpg",
  },
  {
    id: "st-sofia",
    slug: "sofia-moreau",
    name: "Sofia Moreau",
    position: "Master Colourist",
    specialties: ["Balayage", "Highlights", "Blonding"],
    bio: "Sofia specialises in delicate, high-lift blonding and lived-in highlights, with a keen eye for tone that flatters every skin undertone.",
    image: "/images/luxe-reception.jpg",
  },
  {
    id: "st-elena",
    slug: "elena-petrova",
    name: "Elena Petrova",
    position: "Bridal & Occasion Specialist",
    specialties: ["Updos", "Bridal Styling", "Extensions"],
    bio: "Elena has styled over 400 weddings and formal events, known for styles that hold flawlessly from ceremony through the last dance.",
    image: "/images/luxe-featured.jpg",
  },
  {
    id: "st-noah",
    slug: "noah-bennett",
    name: "Noah Bennett",
    position: "Senior Stylist",
    specialties: ["Modern Cuts", "Curly Hair", "Styling"],
    bio: "Noah is our resident curl expert, dedicated to cutting and styling textured hair in ways that celebrate its natural pattern.",
    image: "/images/luxe-styling-station.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Isabelle M.",
    rating: 5,
    review:
      "Absolutely loved my experience. The consultation was thoughtful, the service was exceptional, and I left feeling amazing.",
    service: "Signature Balayage",
  },
  {
    id: "t-2",
    name: "Charlotte R.",
    rating: 5,
    review:
      "From the moment I walked in, everything felt considered — the lighting, the playlist, the way Aria listened before touching a single strand. My colour has never looked this natural.",
    service: "Colour Correction",
  },
  {
    id: "t-3",
    name: "Priya K.",
    rating: 5,
    review:
      "Marcus gave me the best haircut I've had in a decade. He explained exactly why he was cutting it that way and it grew out beautifully for months.",
    service: "Precision Haircut",
  },
  {
    id: "t-4",
    name: "Grace T.",
    rating: 5,
    review:
      "Elena styled my entire bridal party and everyone's hair held through an outdoor ceremony, a rainstorm, and a five-hour reception. Truly a professional.",
    service: "Bridal Styling",
  },
  {
    id: "t-5",
    name: "Naomi S.",
    rating: 5,
    review:
      "The treatment room alone is worth the visit — but the results are what bring me back every six weeks. My hair feels stronger than it has in years.",
    service: "Deep Repair Ritual",
  },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "why-experience",
    title: "Experienced Professionals",
    description:
      "Every stylist on our team brings a decade or more of craft, ongoing training, and an eye for detail.",
    icon: "award",
  },
  {
    id: "why-consultation",
    title: "Personalised Consultations",
    description:
      "No two visits are the same — every appointment begins with a real conversation about your hair and your life.",
    icon: "chat",
  },
  {
    id: "why-products",
    title: "Premium Products",
    description:
      "We work exclusively with professional-grade, low-damage colour and care lines chosen for long-term hair health.",
    icon: "sparkle",
  },
  {
    id: "why-technique",
    title: "Modern Techniques",
    description:
      "From freehand balayage to bond-building science, our team trains continuously in the latest global techniques.",
    icon: "wand",
  },
  {
    id: "why-hygiene",
    title: "Hygienic & Comfortable Environment",
    description:
      "Meticulous sanitation standards and a calm, considered studio designed for total ease.",
    icon: "shield",
  },
  {
    id: "why-client-first",
    title: "Client-First Service",
    description:
      "Transparent pricing, honest timelines, and results that are built to make you feel like yourself — only better.",
    icon: "heart",
  },
];
