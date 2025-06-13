import { type JSX, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import authService from "../../services/authService";
import { toast } from "react-hot-toast";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if cookie exists
        const cookie = localStorage.getItem('cookie');
        if (!cookie) {
          setIsAuthenticated(false);
          return;
        }

        // Verify authentication by trying to get profile
        await authService.getProfile();
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Authentication check failed:', error);
        localStorage.removeItem('cookie'); // Clear invalid cookie
        setIsAuthenticated(false);
        toast.error('Please login to access this page');
      }
    };

    checkAuth();
  }, []);

  // Show nothing while checking authentication
  if (isAuthenticated === null) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render children if authenticated
  return children;
}; 