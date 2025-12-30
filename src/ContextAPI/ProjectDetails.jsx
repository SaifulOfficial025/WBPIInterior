import React, { createContext, useContext, useState, useEffect } from "react";
import config from "./config";

const ProjectDetailsContext = createContext();

export const useProjectDetails = () => {
  const context = useContext(ProjectDetailsContext);
  if (!context) {
    throw new Error(
      "useProjectDetails must be used within ProjectDetailsProvider"
    );
  }
  return context;
};

export const ProjectDetailsProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch project details from API
  const fetchProjectDetails = async (projectId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.baseURL}projects/${projectId}/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      if (result.success && result.data) {
        setProjectData(result.data);
        return result.data;
      } else {
        throw new Error(result.message || "Failed to fetch project details");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching project details:", err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    projectData,
    loading,
    error,
    fetchProjectDetails,
  };

  return (
    <ProjectDetailsContext.Provider value={value}>
      {children}
    </ProjectDetailsContext.Provider>
  );
};

export default ProjectDetailsContext;
