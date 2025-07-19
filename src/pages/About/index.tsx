import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { AboutUsSection } from "./AboutUsPage";
import { OurJourneySection } from "./OurJourney";
import { MissionVisionSection } from "./Mission";
import { KeyAchievementsSection } from "./KeyAchievements";
import { KeyPeopleSection } from "./KeyPeople";
import { DownloadBrochure } from "@/components/DownloadBrochure";
import { HeroSection } from "./HeroSection";
import { WhyTrilok } from "./WhyTrilok";

export function AboutPage() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <HeroSection />
      <AboutUsSection />
      <MissionVisionSection />
      <OurJourneySection />
      <WhyTrilok />
      <KeyAchievementsSection />
      <DownloadBrochure />
      <KeyPeopleSection />
      <Footer />
    </div>
  )
}