import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { SignUpPage } from "../pages/SignUp/SignUpPage";
import { GuestLayout } from "../layouts/Guest/GuestLayout";
import { PricingPage } from "../pages/Pricing/PricingPage";
import { Blog } from "../pages/Blog/Blog";
import { Support } from "../pages/Support/Support";
import { UserLayout } from "../layouts/User/UserLayout";
import { AppHome } from "../pages/AppHome/AppHome";
import { ResumeBuilder } from "../pages/ResumeBuilder/ResumeBuilder";
// Define your routes here
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
  {
    path: "/app",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <AppHome />,
      },
      {
        path: "/app/resume-builder",
        element: <ResumeBuilder />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];
