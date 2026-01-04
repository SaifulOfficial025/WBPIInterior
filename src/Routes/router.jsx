import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Team from "../Pages/OurTeam/RootPage";
import Test from "../Pages/Test";
import RootPageProjects from "../Pages/Projects/RootPageProjects";
import Services from "../Pages/Services/RootPage";
import RootPageAbout from "../Pages/About/RootPage";
import RootPageContact from "../Pages/Contact/RootPage";
import LiveRootPage from "../Pages/Live/RootPage";
import LoginPage from "../Pages/Authentication/SignIn.jsx";
import SignUpPage from "../Pages/Authentication/SignUp.jsx";
import OTPVerification from "../Pages/Authentication/OTPVerification.jsx";
import ForgetPassword from "../Pages/Authentication/ForgetPassword.jsx";
import ForgetPasswordOTP from "../Pages/Authentication/ForgetPasswordOTP.jsx";
import ResetPassword from "../Pages/Authentication/ResetPassword.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/projects",
    element: <RootPageProjects />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <RootPageAbout />,
  },
  {
    path: "/contact",
    element: <RootPageContact />,
  },
  {
    path: "/live",
    element: <LiveRootPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/otp-verification",
    element: <OTPVerification />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/forget-password-otp",
    element: <ForgetPasswordOTP />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
