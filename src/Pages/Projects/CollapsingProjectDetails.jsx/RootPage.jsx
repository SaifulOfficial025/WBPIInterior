import React, { useState, useRef } from "react";
import Hero from "./Hero";
import LookFeel from "./LookFeel";
import CorporateIdentity from "./CorporateIdentity";
import MoodImages from "./MoodImages";
import Furniture from "./Furniture";
import FullScreenImage from "./FullScreenImage";
import projectfinder from "../../../../public/PropertyFinder.png";

function RootPage() {
  const [showFullScreen, setShowFullScreen] = useState(true);
  const heroRef = useRef(null);

  const handleDetailsClick = () => {
    setShowFullScreen(false);
    // Scroll to Hero component after a short delay to ensure it's rendered
    setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div>
      {showFullScreen && (
        <FullScreenImage
          imgUrl={projectfinder}
          onSeeDetails={handleDetailsClick}
        />
      )}
      <div ref={heroRef}>
        <Hero />
      </div>
      <Furniture />
      <LookFeel />
      <CorporateIdentity />
      <MoodImages />
    </div>
  );
}

export default RootPage;
