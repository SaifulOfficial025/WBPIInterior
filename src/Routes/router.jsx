import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Team from "../Pages/OurTeam/RootPage";
import Test from "../Pages/Test";
import RootPageProjects from "../Pages/Projects/RootPageProjects";
import Services from "../Pages/Services/RootPage";
import RootPageAbout from "../Pages/About/RootPage";
import RootPageContact from "../Pages/Contact/RootPage";
import LiveRootPage from "../Pages/Live/RootPage";

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
]);
