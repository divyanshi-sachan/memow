import CategoriesSection from "@/components/home/categories-section";
import FeaturesSection from "@/components/home/features-section";
import HeadSection from "@/components/home/head-section";
import Hero from "@/components/home/hero";
import HeroMeq from "@/components/home/hero-meq";
import BeverageLanding from "@/components/home/products-section";
import ShopSection from "@/components/home/shop-section";
import AnimatedTestimonialsDemo from "@/components/home/testimonials";
import Faq3Demo from "@/components/faqs/FaqsSection";
import { Feature6 } from "@/components/home/features";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/home/video";
import HeroPage from "@/components/home/heropage";
import LoadingOverlay from "@/components/home/loading-overlay";
import HeroGsap from "@/components/home/hero-gsap";
import About from "@/components/home/about";
import { BentoGridGalleryDemo } from "@/components/home/gallery";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <LoadingOverlay /> */}
      <HeroGsap />
      <About/>
      {/* <Hero /> */}
      {/* <HeroMeq /> */}
      {/* <HeroPage /> */}
      <CategoriesSection />
      <BeverageLanding />
      {/* <FeaturesSection /> */}
      {/* <HeroVideoDialogDemoTopInBottomOut /> */}
      <Feature6 />
      <HeadSection />
      <BentoGridGalleryDemo />
      <AnimatedTestimonialsDemo />
      <Faq3Demo />
    </main>
  );
}
