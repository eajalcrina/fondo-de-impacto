import { Navbar } from "@/components/call/sections/Navbar";
import { Hero } from "@/components/call/sections/Hero";
import { WhatIsFI } from "@/components/call/sections/WhatIsFI";
import { TrackRecord } from "@/components/call/sections/TrackRecord";
import { InvestmentCall } from "@/components/call/sections/InvestmentCall";
import { InvestorProfiles } from "@/components/call/sections/InvestorProfiles";
import { HowToJoin } from "@/components/call/sections/HowToJoin";
import { FinalCTA } from "@/components/call/sections/FinalCTA";
import { Footer } from "@/components/call/sections/Footer";

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
