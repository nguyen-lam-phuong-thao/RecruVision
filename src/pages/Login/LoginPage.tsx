import { type JSX } from "react";
import { Link } from "react-router-dom";
import * as Tabs from '@radix-ui/react-tabs';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';


export const LoginPage = (): JSX.Element => {
  
  return (
    <div className="min-h-screen bg-[url(/images/png/bg-wave.png)]">
      <main className="w-full flex items-start justify-center pt-[70px] pb-[50px]">
        <div className="flex justify-center items-center mt-[30px]">
          <div className="w-[500px] bg-white rounded-lg shadow-lg p-6 scale-95">
            <Tabs.Root defaultValue="login" className="w-full">
              <Tabs.List className="grid grid-cols-2 border-b border-gray-200 mb-4">
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
    </div>
  );
};
