import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";

// Define your routes here
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];
