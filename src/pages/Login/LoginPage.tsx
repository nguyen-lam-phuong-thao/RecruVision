import { useState, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Tabs from '@radix-ui/react-tabs';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import authService, { login } from "../../services/authService";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from 'axios';

interface FormErrors {
  email?: string;
  password?: string;
}

export const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      await login(email, password);
      const cookie = await authService.getCookie();
      localStorage.setItem('cookie', cookie.cookieHeader);
      console.log("Cookie saved: ", cookie);
      
      toast.success('Login successful');
      console.log("Login successful");
      navigate('/app/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || 'Login failed');
      } else {
        toast.error('Login failed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[url(/images/png/bg-wave.png)]">
      <Toaster position="top-center" />
      <main className="w-full flex items-start justify-center pt-[70px] pb-[50px]">
        <div className="flex justify-center items-center mt-[30px]">
          <div className="w-[500px] bg-white rounded-lg shadow-lg p-6 scale-95">
            <Tabs.Root defaultValue="login" className="w-full">
              <Tabs.List className="border-b border-gray-200 mb-4">
                <Tabs.Trigger
                  value="login"
                  className="px-4 py-2 text-2xl font-medium text-[#4F9CF9] border-b-1 border-gray-200 w-full"
                >
                  Login
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="login" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors({ ...errors, email: undefined });
                        }
                      }}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent pr-10`}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (errors.password) {
                            setErrors({ ...errors, password: undefined });
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOpenIcon className="h-5 w-5" />
                        ) : (
                          <EyeClosedIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
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
                <button 
                  className="w-full mt-4 bg-[#4F9CF9] text-white py-2 px-4 rounded-md hover:bg-[#3d7bc8] focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                  onClick={handleLogin}
                >
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
            </Tabs.Root>
          </div>
        </div>
      </main>
    </div>
  );
};
