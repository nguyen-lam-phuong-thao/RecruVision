import { useEffect, useState } from "react";
import authService from "../../services/authService";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  data: {
    email: string;
    firstName: string;
    lastName: string;
  }
}

interface PasswordChange {
  currentPassword: string;
  newPassword: string;
}

export const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile['data']>({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [passwordChange, setPasswordChange] = useState<PasswordChange>({
    currentPassword: '',
    newPassword: ''
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await authService.getProfile();
        console.log('Profile data received:', response);
        if (response.data) {
          setProfile(response.data);
        } else {
          console.error('Profile data is missing or invalid');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const resetProfile = () => {
    setProfile({
      email: '',
      firstName: '',
      lastName: ''
    });
    setPasswordChange({
      currentPassword: '',
      newPassword: ''
    });
    setShowOldPassword(false);
    setShowNewPassword(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswordChange(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleChangePassword = async () => {
    if (passwordChange.currentPassword === '' || passwordChange.newPassword === '') {
      toast.error('Please fill in all fields');
      return;
    }

    if (passwordChange.newPassword.length < 8) {
      toast.error('New password must be at least 8 characters long');
      return;
    }

    try {
      await authService.changePassword(passwordChange.currentPassword, passwordChange.newPassword);
      toast.success('Password changed successfully');
      setPasswordChange({ currentPassword: '', newPassword: '' });
      console.log("Password changed successfully");
    } catch (error) {
      console.error('Password change failed:', error);
      toast.error('Failed to change password');
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      resetProfile();
      toast.success('Logged out successfully');
      localStorage.removeItem('cookie');
      console.log("Logged out successfully");
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <div className="credential-container flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold text-(--color-secondary)">User Profile</h1>
        <div className="flex gap-4 w-full">
          <div className="w-1/2">
            <label htmlFor="firstName" className="text-xs text-gray-500 font-bold">First Name</label>
            <br />
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none text-gray-500"
              value={profile.firstName}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="text-xs text-gray-500 font-bold">Last Name</label>
            <br />
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none text-gray-500"
              value={profile.lastName}
              onChange={handleInputChange}
              readOnly
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-xs text-gray-500 font-bold">Email</label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none text-gray-500"
            value={profile.email}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className="flex gap-4 w-full">
          <button className="bg-(--color-secondary) text-white rounded-md p-2 w-[100px] border hover:bg-(--color-primary) hover:text-white transition-all duration-300 active:scale-95" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>

      <div className="password-container flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold text-(--color-secondary)">Change Password</h1>
        <div className="flex gap-4 w-full">
          <div className="w-1/2">
            <label htmlFor="currentPassword" className="text-xs text-gray-500 font-bold">Current Password</label>
            <br />
            <div className="relative">
              <input 
                id="currentPassword" 
                type={showOldPassword ? "text" : "password"} 
                placeholder="Current Password" 
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-sky-500 text-gray-500"
                value={passwordChange.currentPassword}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showOldPassword ? (
                  <EyeOpenIcon className="h-5 w-5" />
                ) : (
                  <EyeClosedIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="newPassword" className="text-xs text-gray-500 font-bold">New Password</label>
            <br />
            <div className="relative">
              <input 
                id="newPassword" 
                type={showNewPassword ? "text" : "password"} 
                placeholder="New Password" 
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-sky-500 text-gray-500"
                value={passwordChange.newPassword}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showNewPassword ? (
                  <EyeOpenIcon className="h-5 w-5" />
                ) : (
                  <EyeClosedIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        <button 
          className="bg-(--color-secondary) text-white rounded-md p-2 w-[100px] hover:bg-(--color-primary) transition-all duration-300 active:scale-95" 
          onClick={handleChangePassword}
        >
          Save
        </button>
      </div>
    </div>
  )
}
