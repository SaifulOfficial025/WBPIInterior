import React, { useState } from "react";
import RootPageImageFrames from "./RootPageImageFrames";
import RootPage from "./CollapsingProjectDetails.jsx/RootPage";

function RootPageProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleProjectClick = (project) => {
    if (selectedProject?.id === project.id && isDetailVisible) {
      // Close if clicking same project
      setIsDetailVisible(false);
      setTimeout(() => setSelectedProject(null), 300);
    } else {
      // Open new project
      setSelectedProject(project);
      setIsDetailVisible(true);
    }
  };

  return (
    <div>
      <RootPageImageFrames onProjectClick={handleProjectClick} />

      {/* Collapsible detail section with animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isDetailVisible ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {selectedProject && <RootPage project={selectedProject} />}
      </div>
    </div>
  );
}

export default RootPageProjects;
