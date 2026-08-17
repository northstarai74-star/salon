import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FeaturedServices } from "@/components/FeaturedServices";
import { Gallery } from "@/components/Gallery";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { StylistsSection } from "@/components/StylistsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { SalonExperience } from "@/components/SalonExperience";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { SocialGallery } from "@/components/SocialGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceGrid />
      <FeaturedServices />
      <Gallery />
      <BeforeAfterSection />
      <StylistsSection />
      <WhyChooseUs />
      <TestimonialCarousel />
      <SalonExperience />
      <BookingSection />
      <ContactSection />
      <SocialGallery />
    </main>
  );
}
