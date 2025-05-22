import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";

export default function App() {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg overflow-hidden border-[2.67px] border-solid border-[#ced4da]">
      <main className="w-full">
        <TestimonialsSection />
        <WhyChooseSection />
        <FeaturesSection />
        <HeroSection />
        <CallToActionSection />
        <FooterSection />
      </main>
    </div>
  );
};
