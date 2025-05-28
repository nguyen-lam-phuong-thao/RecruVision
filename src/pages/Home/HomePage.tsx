import { type JSX } from "react";
import { CallToActionSection } from "../../screens/HomePage/sections/CallToActionSection";
import { FeaturesSection } from "../../screens/HomePage/sections/FeaturesSection";
import { TestimonialsSection } from "../../screens/HomePage/sections/TestimonialsSection";
import { HeroSection } from "../../screens/HomePage/sections/HeroSection";
import { WhyChooseSection } from "../../screens/HomePage/sections/WhyChooseSection/WhyChooseSection";


export const HomePage = (): JSX.Element => {
 
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <main className="w-full">
        <HeroSection />
        <WhyChooseSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
    </div>
  );
};
