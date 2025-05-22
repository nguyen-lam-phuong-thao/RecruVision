import React from "react";
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";
import { routes } from "./index";

const router = createBrowserRouter(routes);

export const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
}; 