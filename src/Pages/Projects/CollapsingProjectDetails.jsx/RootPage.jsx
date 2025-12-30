import React, { useState, useRef, useEffect } from "react";
import Hero from "./Hero";
import LookFeel from "./LookFeel";
import CorporateIdentity from "./CorporateIdentity";
import MoodImages from "./MoodImages";
import Furniture from "./Furniture";
import FullScreenImage from "./FullScreenImage";
import { useProjectDetails } from "../../../ContextAPI/ProjectDetails";
import projectfinder from "../../../../public/PropertyFinder.png";

function RootPage({
  project,
  currentProjectIndex = 1,
  totalProjects = 1,
  onNextProject = () => {},
  onPrevProject = () => {},
}) {
  const [showFullScreen, setShowFullScreen] = useState(true);
  const heroRef = useRef(null);
  const { projectData, loading, error, fetchProjectDetails } =
    useProjectDetails();

  // Fetch project details when project prop changes
  useEffect(() => {
    if (project?.id) {
      fetchProjectDetails(project.id);
    }
  }, [project?.id]);

  const handleDetailsClick = () => {
    setShowFullScreen(false);
    // Scroll to Hero component after a short delay to ensure it's rendered
    setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  // Show loading state
  if (loading && !projectData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  // Show error state (but still use cached data if available)
  if (error && !projectData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Failed to Load Project
          </h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => project?.id && fetchProjectDetails(project.id)}
            className="mt-4 px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Use project data or fallback to defaults
  const coverImage = projectData?.project_cover_image || projectfinder;

  const heroData = projectData
    ? {
        category: projectData.category || "COMMERCIAL",
        projectTitle: projectData.title || "Property Finder",
        headerData: {
          client: projectData.client || "Project Finder",
          design: projectData.design || "WBP Interiors",
          fitOut: projectData.fit_out || "WBP Interiors",
          contact: projectData.contact || "Dhaka",
        },
        imageSrc: coverImage,
        description: projectData.description || "",
        projectNo: projectData.id?.toString() || "24061",
        project: projectData.project || "",
        address: projectData.address || "",
        timeframe: projectData.time_frame || "",
        areaType: projectData.area_type || "",
        featuring: projectData.featuring || "",
        area: projectData.area || "",
        galleryImages: projectData.gallery_images?.images || [],
      }
    : {};

  const lookFeelData = projectData
    ? {
        title:
          projectData.look_n_feel_title || "Warm Modern Corporate Identity",
        description: projectData.look_n_feel_description || "",
        fitOutPrice: projectData.look_n_feel_fit_out_price || "635.00",
        ffePrice: projectData.look_n_feel_ffe_price || "42.00",
        image: projectData.look_n_feel_image || "/lookfeels1.png",
        paletteImage:
          projectData.look_n_feel_pallete_image || "/lookfeels2.png",
      }
    : {};

  const furnitureData = projectData?.ffe_list || [];
  const moodImagesData = projectData?.mood_images?.images || [];

  return (
    <div>
      {showFullScreen && (
        <FullScreenImage
          imgUrl={coverImage}
          onSeeDetails={handleDetailsClick}
        />
      )}
      <div ref={heroRef}>
        <Hero
          {...heroData}
          currentPage={currentProjectIndex}
          totalPages={totalProjects}
          onPrevPage={onPrevProject}
          onNextPage={onNextProject}
        />
      </div>
      <Furniture
        ffeList={furnitureData}
        projectImages={projectData?.project_images?.images || []}
      />
      <LookFeel {...lookFeelData} />
      <CorporateIdentity />
      <MoodImages moodImages={moodImagesData} />
    </div>
  );
}

export default RootPage;
