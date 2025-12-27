import React, { useRef, useState, useEffect } from "react";

function FullScreenImage({ imgUrl, onSeeDetails }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Calculate max scroll when image loads
  const handleImageLoad = () => {
    if (containerRef.current && imageRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const naturalWidth = imageRef.current.naturalWidth;
      const naturalHeight = imageRef.current.naturalHeight;

      // Calculate the actual rendered width based on container height
      const aspectRatio = naturalWidth / naturalHeight;
      const renderedWidth = containerHeight * aspectRatio;

      const scrollRange = Math.max(0, renderedWidth - containerWidth);
      setMaxScroll(scrollRange);

      // Start from center of the image
      if (scrollRange > 0) {
        setImagePosition(-scrollRange / 2);
      } else {
        setImagePosition(0);
      }
    }
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(imagePosition);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    const x = e.pageX;
    const walk = x - startX;
    let newPosition = scrollLeft + walk;

    // Clamp the position - ensure image edges never go past container edges
    if (maxScroll > 0) {
      newPosition = Math.min(0, Math.max(-maxScroll, newPosition));
    } else {
      newPosition = 0;
    }
    setImagePosition(newPosition);
  };

  const handleMouseUp = (e) => {
    e.stopPropagation();
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
      }
    }
  };

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && imageRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const naturalWidth = imageRef.current.naturalWidth;
        const naturalHeight = imageRef.current.naturalHeight;

        // Calculate the actual rendered width based on container height
        const aspectRatio = naturalWidth / naturalHeight;
        const renderedWidth = containerHeight * aspectRatio;

        const scrollRange = Math.max(0, renderedWidth - containerWidth);
        setMaxScroll(scrollRange);

        // Adjust position if out of bounds
        setImagePosition((prev) => {
          if (scrollRange <= 0) return 0;
          return Math.min(0, Math.max(-scrollRange, prev));
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen overflow-hidden bg-white"
      style={{
        cursor: "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={imgUrl}
        alt="Full Screen"
        className="h-full w-auto max-w-none pointer-events-none"
        style={{
          transform: `translateX(${imagePosition}px)`,
          transition: isDragging ? "none" : "transform 0.12s ease-out",
          objectFit: "contain",
          margin: "0 auto",
          minWidth: "100%",
        }}
        onLoad={handleImageLoad}
        draggable={false}
      />

      {/* See Details Button */}
      <button
        onClick={onSeeDetails}
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 px-6 sm:px-20 py-2 sm:py-3 bg-[#ffffff] text-black text-base sm:text-xl font-semibold rounded-full hover:bg-[#f5eff2] transition-colors shadow-lg"
      >
        See Details
      </button>
    </div>
  );
}

export default FullScreenImage;
