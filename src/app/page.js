import Hero from "@/components/Hero";
import FeaturedTreks from "@/components/FeaturedTreks";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TourCategories from "@/components/TourCategories";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQSection from "@/components/FAQSection";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTreks />
      <PromoBanner />
      <TourCategories />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <InstagramFeed />
      <FAQSection />
    </>
  );
}
