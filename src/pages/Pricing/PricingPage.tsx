import { type JSX } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

export const PricingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[url(/images/png/bg-wave.png)]">
      <main className="container px-12 py-32 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-white text-lg">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center px-4">
          {/* Starter Plan Card */}
          <div className="flex-1 bg-white rounded-lg p-8 shadow-lg flex flex-col max-w-[400px]">
            <h2 className="text-2xl font-bold text-black mb-4">Starter Plan</h2>
            <p className="text-2xl font-bold text-black mb-4">FREE</p>
            <p className="text-gray-600 mb-6">
              Ideal for those who want to quickly experience AI technology before upgrading
            </p>
            <div className="relative my-6">
              <Separator.Root className="h-px bg-gray-200" />
              <p className="text-gray-600 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">What's Included</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Basic AI feedback on interview answers (text-only)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">AI-CV evaluation (5 times/day)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Management CVs(50CVs)</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Monthly Plan Card */}
          <div className="flex-1 bg-black rounded-lg p-8 shadow-lg relative flex flex-col max-w-[400px]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-black text-white px-4 py-1 rounded-full border border-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                Most Popular
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Monthly Plan</h2>
            <p className="text-2xl font-bold text-white mb-4">120,000vnd/month</p>
            <p className="text-gray-300 mb-6">
              Suitable for working people who regularly need support to improve their CV, practice in-depth AI interviews, and receive career recommendations.
            </p>
            <div className="relative my-6">
              <Separator.Root className="h-px bg-gray-700" />
              <p className="text-gray-300 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4">What's Included</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Advanced AI feedback (voice-based response evaluation)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Unlimited AI-powered CV evaluations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Management CVs(Unlimited)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Personalized AI interview simulations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">Career path recommendation</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Annual Plan Card */}
          <div className="flex-1 bg-white rounded-lg p-8 shadow-lg flex flex-col max-w-[400px]">
            <h2 className="text-2xl font-bold text-black mb-4">Annual Plan</h2>
            <p className="text-2xl font-bold text-black mb-4">960,000vnđ/year (save 20%)</p>
            <p className="text-gray-600 mb-6">
              For serious users who want to invest long-term, optimize costs and enjoy premium privileges.
            </p>
            <div className="relative my-6">
              <Separator.Root className="h-px bg-gray-200" />
              <p className="text-gray-600 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">What's Included</p>
            </div>
            <p className="text-xl font-semibold text-black text-center mb-6">
              All Monthly Plan Features
              <br />
              <span className="text-3xl">+</span>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Exclusive early access to new AI features</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Premium job market trend reports every quarter</span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
