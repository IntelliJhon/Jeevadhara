import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Foundation } from "@/components/sections/Foundation";
import { FocusCards } from "@/components/sections/FocusCards";
import { OngoingActivities } from "@/components/sections/OngoingActivities";
import { Programs } from "@/components/sections/Programs";
import { Accreditations } from "@/components/sections/Accreditations";
import { Donate } from "@/components/sections/Donate";
import { ProgramIdea } from "@/components/sections/ProgramIdea";
import { ImpactGallery } from "@/components/sections/ImpactGallery";
import { Events } from "@/components/sections/Events";
import { PartnerHospitals } from "@/components/sections/PartnerHospitals";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20 bg-background">
        <Hero />
        <Foundation />
        <FocusCards />
        <OngoingActivities />
        <Programs />
        <Donate />
        <Accreditations />
        <ProgramIdea />
        <ImpactGallery />
        <Events />
        <PartnerHospitals />
      </main>
      <Footer />
    </div>
  );
}
