
import type { RouteObject } from "react-router-dom";
import { ElementHomePage } from "../screens/ElementHomePage/ElementHomePage";

// Define your routes here
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ElementHomePage />,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];
