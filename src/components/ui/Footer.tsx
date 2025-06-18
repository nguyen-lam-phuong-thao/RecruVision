import { MailIcon, PhoneIcon } from "lucide-react";
import { type JSX } from "react";

export const Footer = (): JSX.Element => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Enterprise", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-20">
          <div>
            <h2 className="font-bold text-white text-xl leading-6 mb-4">
              RecruVision
            </h2>
            <p className="text-gray-400 text-base leading-6">
              Empowering Careers with AI – Smarter Applications, Stronger
              Interviews.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white text-lg leading-6 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-base leading-6 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 ml-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="text-gray-400 text-base leading-6">
              © 2025 RecruVision. All rights reserved.
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center mr-6">
                <MailIcon className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm">
                  support@recruvision.com
                </span>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-[#c1c1c1] text-base">
                  +1 (800) 123-4567
                </span>
              </div>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0 mr-10">
              <a href="#" className="flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  alt="Social media icon"
                  src="/images/svg/frame-13.svg"
                />
              </a>
              <a href="#" className="flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  alt="Social media icon"
                  src="/images/svg/frame-17.svg"
                />
              </a>
              <a href="#" className="flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  alt="Social media icon"
                  src="/images/svg/frame-2.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};