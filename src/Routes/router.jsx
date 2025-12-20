import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Team from "../Pages/OurTeam/RootPage";
import Test from "../Pages/Test";
import RootPageImageFrames from "../Pages/Projects/RootPageImageFrames";

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
    element: <RootPageImageFrames />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
