import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import { ProjectDetailsProvider } from "./ContextAPI/ProjectDetails";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjectDetailsProvider>
      <RouterProvider router={router} />
    </ProjectDetailsProvider>
  </StrictMode>
);
