export type ServiceCategorySlug =
  | "haircuts-styling"
  | "hair-colour"
  | "highlights-balayage"
  | "hair-treatments"
  | "bridal-occasion"
  | "beauty-services";

export interface Service {
  id: string;
  category: ServiceCategorySlug;
  categoryLabel: string;
  name: string;
  description: string;
  priceFrom: number;
  duration: string;
  image: string;
}

export interface FeaturedService {
  id: string;
  serviceId: string;
  name: string;
  kicker: string;
  description: string;
  priceFrom: number;
  duration: string;
  image: string;
  align: "left" | "right";
}

export type GalleryCategory = "haircuts" | "colour" | "styling" | "bridal";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  image: string;
  alt: string;
  tall?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  service: string;
  stylist: string;
  duration: string;
  before: string;
  after: string;
}

export interface Stylist {
  id: string;
  slug: string;
  name: string;
  position: string;
  specialties: string[];
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  service?: string;
  image?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
