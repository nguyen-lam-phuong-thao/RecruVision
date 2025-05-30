import { type JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    icon: "/images/svg/frame-4.svg",
    title: "Smart CV Optimizer",
    description: ["Get AI-powered suggestions to improve", "your CV instantly"],
  },
  {
    icon: "/images/svg/frame-5.svg",
    title: "Interview Practice",
    description: [
      "Practice with AI interviewers and get",
      "real-time feedback",
    ],
  },
  {
    icon: "/images/svg/frame-8.svg",
    title: "Student friendly",
    description: [
      "Affordable plans designed for students",
      "and recent graduates",
    ],
  },
];

export const WhyChooseSection = (): JSX.Element => {
  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bold text-4xl text-gray-900 text-center mb-4 font-['Inter',Helvetica] leading-[44px]">
            Why Choose RecruVision
          </h2>
          <p className="font-normal text-gray-600 text-lg text-center font-['Outfit',Helvetica] leading-normal whitespace-nowrap">
            Boost your career prospects with our AI-powered platform for
            students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-xl shadow-[0px_8px_16px_#0000001a,0px_4px_8px_#0000001a] border-0"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-start">
                    <img
                      className="w-8 h-8"
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-xl font-['Inter',Helvetica] leading-normal whitespace-nowrap mb-3">
                  {feature.title}
                </h3>

                <div className="text-gray-600 text-base font-normal">
                  <p className="font-['Outfit',Helvetica] leading-normal">
                    {feature.description[0]}
                  </p>
                  <p className="font-['Outfit',Helvetica] leading-normal">
                    {feature.description[1]}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};