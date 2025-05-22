import React, { type JSX } from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";

export const ElementHomePage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
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
