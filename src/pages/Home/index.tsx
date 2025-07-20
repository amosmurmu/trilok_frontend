import { DownloadBrochure } from "@/components/DownloadBrochure";
import { EventsExhibitions } from "@/components/EventsExhibitions";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { HeroSection } from "./HeroSection";
import { TwoDecades } from "./TwoDecades";
import { OurProductsSection } from "./OurProduct";
import { OurProjectsSection } from "./OurProjects";
import { AboutUs } from "./AboutUs";
import { ClientTestimonialsSection } from "./Testimonials";
import { OurClientsSection } from "./HonorRelationship";
import VideoGallery from "./VideoGallery";

export function HomePage() {

  return (

    <div className="flex flex-col">
      <NavBar />
      <HeroSection />
      <TwoDecades />
      <OurProductsSection />
      <AboutUs />
      {/* <VideoGallery title="Video Gallery" /> */}
      <VideoGallery />
      <OurClientsSection />
      <ClientTestimonialsSection />
      <DownloadBrochure />
      <OurProjectsSection />
      <EventsExhibitions />
      <Footer />
    </div>
  )
}