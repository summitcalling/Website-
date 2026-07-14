import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import FeaturedTreks from "@/components/FeaturedTreks";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TourCategories from "@/components/TourCategories";
import TrekFinder from "@/components/TrekFinder";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <FeaturedTreks />
      <PromoBanner />
      <WhyChooseUs />
      <TourCategories />
      <TrekFinder />
      <Testimonials />
      <Gallery />
      <CTASection />
    </>
  );
}
