import React, { useState, useRef } from "react";
import Header from "../../Shared/Header";
import Navbar from "./Shared/Navbar";
import FullImageSlidePhotoFrame from "./Shared/FullImageSlidePhotoFrame";

const projectsData = [
  {
    id: 1,
    imgUrl: "/PropertyFinder.png",
    title: "PROPERTY FINDER",
    location: "MEDIA CITY, DUBAI, UAE",
    year: "2025",
    area: "2,658",
    category: "HOSPITALITY",
  },
  {
    id: 2,
    imgUrl: "/InvestmentOffice.png",
    title: "FRONDS INVESTMENT OFFICE",
    location: "52 ROAD, DUBAI, UAE",
    year: "2025",
    area: "5,200",
    category: "COMMERCIAL",
  },
  {
    id: 3,
    imgUrl: "/PetrochemOffice.png",
    title: "PETROCHEM OFFICE",
    location: "JAFZA, DUBAI, UAE",
    year: "2025",
    area: "25,000",
    category: "RESIDENTIAL",
  },
  {
    id: 4,
    imgUrl: "/PropertyFinder.png",
    title: "PROPERTY FINDER",
    location: "MEDIA CITY, DUBAI, UAE",
    year: "2025",
    area: "2,658",
    category: "HOSPITALITY",
  },
  {
    id: 5,
    imgUrl: "/InvestmentOffice.png",
    title: "FRONDS INVESTMENT OFFICE",
    location: "52 ROAD, DUBAI, UAE",
    year: "2025",
    area: "5,200",
    category: "COMMERCIAL",
  },
  {
    id: 6,
    imgUrl: "/PetrochemOffice.png",
    title: "PETROCHEM OFFICE",
    location: "JAFZA, DUBAI, UAE",
    year: "2025",
    area: "25,000",
    category: "RESIDENTIAL",
  },
];

function RootPageImageFrames({ onProjectClick }) {
  const [selectedCategory, setSelectedCategory] = useState("MIXED USE");
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      <div className="py-8 px-4">
        {/* Horizontal scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide select-none"
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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 cursor-pointer"
              style={{ width: "420px" }}
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default RootPageImageFrames;
