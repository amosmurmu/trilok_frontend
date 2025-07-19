import { NavBar } from "@/components/Navbar";
import { FeaturesSubsection } from "./FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./HeroSection";
import { ProductsSubsection } from "./ProductsSubSection";
import { CallToActionSection } from "../Projects/CallToAction";
import { RelatedProductsSubsection } from "./RelatedProducts";
import { ProjectGallery } from "./ProjectGallery";

export function ProductsPage() {
  return (
    <div
      className="flex flex-col min-h-screen"
    >
      <NavBar />
      <HeroSection />
      <ProductsSubsection />
      <FeaturesSubsection />
      <RelatedProductsSubsection />
      <ProjectGallery />
      <CallToActionSection />
      <Footer />
    </div>
  )
}