import { type JSX } from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { HeroSection } from "./sections/HeroSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";

export const ElementHomePage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <main className="w-full">
        <HeroSection />
        <WhyChooseSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToActionSection />
        <FooterSection />
      </main>
    </div>
  );
};
