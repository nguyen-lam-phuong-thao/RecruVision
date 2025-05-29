import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { SignUpPage } from "../pages/SignUp/SignUpPage";
import { UserLayout } from "../layouts/User/UserLayout";
import { PricingPage } from "../pages/Pricing/PricingPage";
import { Blog } from "../pages/Blog/Blog";
import { Support } from "../pages/Support/Support";
// Define your routes here
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout />,
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
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];
