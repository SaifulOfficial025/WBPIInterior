import React, { useState, useEffect } from "react";
import RootPageImageFrames from "./RootPageImageFrames";
import RootPage from "./CollapsingProjectDetails.jsx/RootPage";
import { getProjects } from "../../ContextAPI/Projects";

function RootPageProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Fetch all projects on mount
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const projects = await getProjects();
        setAllProjects(projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchAllProjects();
  }, []);

  const handleProjectClick = (project) => {
    if (selectedProject?.id === project.id && isDetailVisible) {
      // Close if clicking same project
      setIsDetailVisible(false);
      setTimeout(() => setSelectedProject(null), 300);
    } else {
      // Open new project and find its index
      const index = allProjects.findIndex((p) => p.id === project.id);
      setCurrentProjectIndex(index >= 0 ? index : 0);
      setSelectedProject(project);
      setIsDetailVisible(true);
    }
  };

  const handleNextProject = () => {
    if (allProjects.length === 0) return;
    const nextIndex = (currentProjectIndex + 1) % allProjects.length;
    setCurrentProjectIndex(nextIndex);
    setSelectedProject(allProjects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (allProjects.length === 0) return;
    const prevIndex =
      (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
    setCurrentProjectIndex(prevIndex);
    setSelectedProject(allProjects[prevIndex]);
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
        {selectedProject && (
          <RootPage
            project={selectedProject}
            currentProjectIndex={currentProjectIndex + 1}
            totalProjects={allProjects.length}
            onNextProject={handleNextProject}
            onPrevProject={handlePrevProject}
          />
        )}
      </div>
    </div>
  );
}

export default RootPageProjects;
