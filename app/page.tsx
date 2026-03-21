import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatIsFI } from "@/components/sections/WhatIsFI";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { InvestmentCall } from "@/components/sections/InvestmentCall";
import { InvestorProfiles } from "@/components/sections/InvestorProfiles";
import { HowToJoin } from "@/components/sections/HowToJoin";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InvestmentCall />
      <InvestorProfiles />
      <HowToJoin />
      <FinalCTA />
      <WhatIsFI />
      <TrackRecord />
      <Footer />
    </main>
  );
}
