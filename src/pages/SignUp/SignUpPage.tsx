import { useState, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Tabs from '@radix-ui/react-tabs';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { register } from "../../services/authService";
import toast from "react-hot-toast";
import { AxiosError } from 'axios';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const SignUpPage = (): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
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
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm() || !isAgree) {
      return;
    }

    try {
      await register({ firstName, lastName, email, password });
      toast.success('Sign up successful');
      navigate('/login');
    } catch (error) {
      console.error('Sign up failed:', error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || 'Sign up failed');
      } else {
        toast.error('Sign up failed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[url(/images/png/bg-wave.png)]">
      <main className="w-full flex items-start justify-center pt-[70px] pb-[50px]">
        <div className="flex justify-center items-center mt-[30px]">
          <div className="w-[500px] bg-white rounded-lg shadow-lg p-6 scale-95">
            <Tabs.Root defaultValue="signup" className="w-full">
              <Tabs.List className="border-b border-gray-200 mb-4">
                <Tabs.Trigger
                  value="signup"
                  className="px-4 py-2 text-2xl font-medium text-[#4F9CF9] border-b-1 border-gray-200 w-full"
                >
                  Signup
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="signup" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent`}
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        if (errors.firstName) {
                          setErrors({ ...errors, firstName: undefined });
                        }
                      }}
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent`}
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        if (errors.lastName) {
                          setErrors({ ...errors, lastName: undefined });
                        }
                      }}
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a password"
                        className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent`}
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent`}
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (errors.confirmPassword) {
                            setErrors({ ...errors, confirmPassword: undefined });
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showConfirmPassword ? (
                          <EyeOpenIcon className="h-5 w-5" />
                        ) : (
                          <EyeClosedIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>

                <div className="flex items-start">
                  <Checkbox.Root
                    id="terms"
                    className="mt-1 w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-[#4F9CF9]"
                    checked={isAgree}
                    onCheckedChange={(checked) => setIsAgree(checked === 'indeterminate' ? false : checked)}
                  >
                    <Checkbox.Indicator className="flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-[#4F9CF9]" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/#" className="text-[#4F9CF9] hover:text-[#3d7bc8]">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/#" className="text-[#4F9CF9] hover:text-[#3d7bc8]">Privacy Policy</Link>
                  </label>
                </div>

                <button 
                  className="w-full mt-4 bg-[#4F9CF9] text-white py-2 px-4 rounded-md hover:bg-[#3d7bc8] focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                  onClick={handleSignUp} 
                  disabled={!isAgree}
                >
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
