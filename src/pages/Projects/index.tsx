import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { ProjectsSection } from "./ProjectsSection";
import { HeroSection } from "./HeroSection";
import { CallToActionSection } from "./CallToAction";

export function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}