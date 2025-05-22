import React, { type JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const TestimonialsSection = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
  ];

  return (
    <section className="relative w-full bg-[#043873] overflow-hidden">
      <div className="w-full h-[800px] bg-[url(/line-grid---filled-squares.png)] bg-[100%_100%] flex flex-col">
        {/* Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4">
          <Card className="relative w-[900px] h-[70px] rounded-[40px] bg-[#ffffffe6] backdrop-blur-[20px] border-none">
            <div className="flex items-center h-full px-8">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  className="w-[50px] h-[42px] -ml-1 object-cover"
                  alt="Logo"
                  src="/logo.svg"
                />
                <span className="ml-4 font-bold text-[#4f9cf9] text-xl leading-6 font-sans">
                  RecruVision
                </span>
              </div>

              {/* Navigation */}
              <div className="flex items-center ml-[200px]">
                <NavigationMenu>
                  <NavigationMenuList className="flex gap-8">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuLink
                          href={item.href}
                          className="font-normal text-gray-700 text-base leading-5 font-sans"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                {/* Auth Buttons */}
                <div className="flex items-center ml-8">
                  <Button
                    variant="ghost"
                    className="font-bold text-black text-base leading-5 font-sans"
                  >
                    Login
                  </Button>
                  <Button className="ml-4 w-[100px] h-[40px] bg-black rounded-lg text-white text-base font-normal font-sans">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

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
                  src="/undraw-hiring-8szx-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};