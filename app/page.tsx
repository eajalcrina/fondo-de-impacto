import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatIsFI } from "@/components/sections/WhatIsFI";
import { InvestmentCall } from "@/components/sections/InvestmentCall";
import { InvestorProfiles } from "@/components/sections/InvestorProfiles";
import { HowToJoin } from "@/components/sections/HowToJoin";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <article itemScope itemType="https://schema.org/WebPage">
          <Hero />
          <WhatIsFI />
          <InvestmentCall />
          <InvestorProfiles />
          <HowToJoin />
          <TrackRecord />
          <FinalCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
