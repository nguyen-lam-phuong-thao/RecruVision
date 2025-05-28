import { type JSX } from "react";
import { Link } from "react-router-dom";
import * as Tabs from '@radix-ui/react-tabs';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from "../../components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Card } from "../../components/ui/card";
import { MailIcon, PhoneIcon } from "lucide-react";

export const LoginPage = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
  ];
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
    <div className="min-h-screen bg-[url(/bg-wave.png)]">
      <header>
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
      </header>
      <main className="w-full flex items-start justify-center pt-[70px] pb-[50px]">
        <div className="flex justify-center items-center mt-[30px]">
          <div className="w-[500px] bg-white rounded-lg shadow-lg p-6 scale-95">
            <Tabs.Root defaultValue="login" className="w-full">
              <Tabs.List className="flex border-b border-gray-200 mb-4">
                <Tabs.Trigger
                  value="login"
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-[#4F9CF9] data-[state=active]:border-b-2 data-[state=active]:border-[#4F9CF9]"
                >
                  Login
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="signup"
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-[#4F9CF9] data-[state=active]:border-b-2 data-[state=active]:border-[#4F9CF9]"
                >
                  Signup
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="login" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Checkbox.Root
                      id="remember"
                      className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-[#4F9CF9]"
                    >
                      <Checkbox.Indicator className="flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-[#4F9CF9]" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#4F9CF9] hover:text-[#3d7bc8]"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <button className="w-full mt-4 bg-[#4F9CF9] text-white py-2 px-4 rounded-md hover:bg-[#3d7bc8] focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:ring-offset-2">
                  Login
                </button>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F9CF9]"
                    >
                      <FcGoogle className="w-5 h-5" />
                      <span className="text-sm font-medium text-gray-700">Google</span>
                    </button>
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F9CF9]"
                    >
                      <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
                      <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </Tabs.Content>
              <Tabs.Content value="signup" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <Checkbox.Root
                    id="terms"
                    className="mt-1 w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-[#4F9CF9]"
                  >
                    <Checkbox.Indicator className="flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-[#4F9CF9]" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-[#4F9CF9] hover:text-[#3d7bc8]">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-[#4F9CF9] hover:text-[#3d7bc8]">Privacy Policy</Link>
                  </label>
                </div>

                <button className="w-full mt-4 bg-[#4F9CF9] text-white py-2 px-4 rounded-md hover:bg-[#3d7bc8] focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:ring-offset-2">
                  Sign Up
                </button>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F9CF9]"
                    >
                      <FcGoogle className="w-5 h-5" />
                      <span className="text-sm font-medium text-gray-700">Google</span>
                    </button>
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F9CF9]"
                    >
                      <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
                      <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </main>
      <footer>
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
                      src="/frame-13.svg"
                    />
                  </a>
                  <a href="#" className="flex items-center justify-center">
                    <img
                      className="w-6 h-6"
                      alt="Social media icon"
                      src="/frame-17.svg"
                    />
                  </a>
                  <a href="#" className="flex items-center justify-center">
                    <img
                      className="w-6 h-6"
                      alt="Social media icon"
                      src="/frame-2.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
};
