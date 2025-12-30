import React, { useState, useRef, useEffect } from "react";
import Header from "../../Shared/Header";
import Navbar from "./Shared/Navbar";
import FullImageSlidePhotoFrame from "./Shared/FullImageSlidePhotoFrame";
import { getProjects } from "../../ContextAPI/Projects";

function RootPageImageFrames({ onProjectClick }) {
  const [selectedCategory, setSelectedCategory] = useState("MIXED USE");
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();

        // Map backend data to frontend format
        const mappedData = data.map((project) => ({
          id: project.id,
          imgUrl: project.project_cover_image,
          title: project.title.toUpperCase(),
          location: project.address,
          year: project.project_year.toString(),
          area: project.area,
          category: project.category || "MIXED USE", // Default category if not provided
        }));

        setProjectsData(mappedData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on category
  const filteredProjects =
    selectedCategory === "MIXED USE"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = "grab";
      }
    }
  };

  return (
    <div>
      <Header />
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="py-4 sm:py-8 px-2 sm:px-4">
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-gray-600 text-lg">Loading projects...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex justify-center items-center py-20">
            <div className="text-red-600 text-lg">{error}</div>
          </div>
        )}

        {/* Projects List */}
        {!loading && !error && (
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide select-none"
            style={{
              cursor: "grab",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 cursor-pointer"
                  style={{ width: window.innerWidth < 640 ? "280px" : "420px" }}
                  onClick={() => onProjectClick && onProjectClick(project)}
                >
                  <FullImageSlidePhotoFrame
                    imgUrl={project.imgUrl}
                    title={project.title}
                    location={project.location}
                    year={project.year}
                    area={project.area}
                  />
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center items-center py-20">
                <div className="text-gray-600 text-lg">No projects found</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RootPageImageFrames;
