import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { SignUpPage } from "../pages/SignUp/SignUpPage";
import { GuestLayout } from "../layouts/Guest/GuestLayout";
import { PricingPage } from "../pages/Pricing/PricingPage";
import { Blog } from "../pages/Blog/Blog";
import { Support } from "../pages/Support/Support";
import { UserLayout } from "../layouts/User/UserLayout";
import { DashboardHome } from "../pages/DashboardHome/DashboardHome";
import { ResumeBuilder } from "../pages/ResumeBuilder/ResumeBuilder";
import { Profile } from "../pages/Profile/Profile";
import { SupportCenter } from "../pages/SupportCenter/SupportCenter";
import Success from "../pages/Success/Success";
import { JobTracker } from "../pages/Tracker/JobTracker";
import { InterviewPractice } from "../pages/Interview/InterviewPractice";
import { CareerPath } from "../pages/CareerPath/CareerPath";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { ResumeEditor } from "../pages/ResumeEditor/ResumeEditor";

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
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
  {
    path: "/app",
    element: (
     
       <UserLayout />

    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "/app/resume-builder",
        element: <ResumeBuilder />,
      },
      {
        path: "/app/resume-builder/resume-editor",
        element: <ResumeEditor />,
      },
      {
        path: "/app/profile",
        element: <Profile />,
      },
      {
        path: "/app/support-center",
        element: <SupportCenter />,
      },
      {
        path: "/app/job-tracker",
        element: <JobTracker />,
      },
      {
        path: "/app/interview-practice",
        element: <InterviewPractice />,
      },
      {
        path: "/app/career-path",
        element: <CareerPath />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];
