import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { SignUpPage } from "../pages/SignUp/SignUpPage";
import { UserLayout } from "../layouts/User/UserLayout";
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
    ],
  },
  
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];
