import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./HeroSection";
import { DownloadBrochure } from "@/components/DownloadBrochure";
import { ContactUsSection } from "./ContactUs";

export function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HeroSection />
      <ContactUsSection />
      <DownloadBrochure />
      <Footer />
    </div>
  )
}