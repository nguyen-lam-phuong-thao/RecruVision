import { type JSX } from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {

  return (
    <section className="relative w-full bg-[#043873] overflow-hidden">
      <div className="w-full h-[800px] bg-[url(/images/png/line-grid---filled-squares.png)] bg-[100%_100%] flex flex-col pt-20">
        {/* Hero Content */}
        <div className="flex items-center flex-1">
          <div className="relative mx-auto max-w-[1200px] px-4">
            <div className="flex flex-wrap">
              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <h1 className="text-[56px] font-bold text-white leading-[60px] font-sans">
                  Boost Your CV Today
                </h1>
                <p className="mt-16 text-lg font-normal text-white leading-6 max-w-[500px] font-sans">
                  Empowering Careers with AI – Smarter Applications, Stronger
                  Interviews.
                </p>
                <Button className="mt-8 w-[160px] h-[50px] bg-[#4f9cf9] rounded-lg text-white text-lg font-normal font-sans">
                  Get Started
                </Button>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-end">
                <img
                  className="w-[500px] h-[450px]"
                  alt="Hiring illustration"
                  src="/images/svg/undraw-hiring-8szx-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};