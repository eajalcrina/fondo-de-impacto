import { Navbar } from "@/components/call/sections/Navbar";
import { Hero } from "@/components/call/sections/Hero";
import { WhatIsFI } from "@/components/call/sections/WhatIsFI";
import { InvestmentCall } from "@/components/call/sections/InvestmentCall";
import { InvestorProfiles } from "@/components/call/sections/InvestorProfiles";
import { HowToJoin } from "@/components/call/sections/HowToJoin";
import { TrackRecord } from "@/components/call/sections/TrackRecord";
import { FinalCTA } from "@/components/call/sections/FinalCTA";
import { Footer } from "@/components/call/sections/Footer";

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
