import { type JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featuresData = [
  {
    id: 1,
    title: "AI-Powered Scoring",
    icon: "/frame-6.svg",
    description:
      "Our advanced AI algorithm evaluates candidates based on multiple criteria:",
    items: [
      "Skills and experience matching",
      "Cultural fit assessment",
      "Performance prediction",
    ],
  },
  {
    id: 2,
    title: "CV Optimization",
    icon: "/frame.svg",
    description: "Intelligent CV analysis and enhancement features:",
    items: [
      "Automated keyword extraction",
      "Format standardization",
      "Skills gap analysis",
    ],
  },
  {
    id: 3,
    title: "Virtual Interviews",
    icon: "/frame-10.svg",
    description: "Complete video interview solution with:",
    items: [
      "AI-powered behavior analysis",
      "Advanced AI feedback (voice-based response evaluation).",
      "Personalized AI interview simulations.",
    ],
    fullHeight: true,
  },
  {
    id: 4,
    title: "Career Path Guidance",
    icon: "/frame-22.svg",
    description: "Comprehensive career development tools:",
    items: [
      "Skill development mapping",
      "Industry trend analysis",
      "Personalized recommendations",
    ],
  },
  {
    id: 5,
    title: "Centralized CV Management",
    icon: "/frame-15.svg",
    description: "Advanced document management system:",
    items: [
      "Smart categorization",
      "Advanced search capabilities",
      "Secure cloud storage",
    ],
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gray-50 py-16 border-t-[1px] border-b-[1px] border-solid border-[#ced4da]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Inter',Helvetica]">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 font-['Inter',Helvetica]">
            Everything you need for modern application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
          {featuresData.map((feature) => (
            <Card
              key={feature.id}
              className={`bg-white rounded-xl shadow-[0px_8px_16px_#0000001a,0px_4px_8px_#0000001a] ${
                feature.fullHeight ? "row-span-2" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <img
                    className="w-auto h-6"
                    alt={`${feature.title} icon`}
                    src={feature.icon}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 font-['Inter',Helvetica] mb-4">
                  {feature.title}
                </h3>

                <p className="text-base text-gray-600 font-['Inter',Helvetica] mb-4">
                  {feature.description}
                </p>

                <ul className="space-y-4">
                  {feature.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex items-center justify-center mr-2">
                        <img
                          className="w-4 h-4"
                          alt="Checkmark"
                          src="/frame-3.svg"
                        />
                      </span>
                      <span className="text-base text-gray-600 font-['Inter',Helvetica]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};