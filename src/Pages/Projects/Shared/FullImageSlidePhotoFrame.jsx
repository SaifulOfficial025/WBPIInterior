import React, { useRef, useState, useEffect } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

function FullImageSlidePhotoFrame({
  imgUrl,
  title = "PROJECT TITLE",
  location = "LOCATION",
  year = "2025",
  area = "0",
  category = "",
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isColored, setIsColored] = useState(false);

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
    setIsColored(true);
    setStartX(e.pageX);
    setScrollLeft(imagePosition);
    containerRef.current.style.cursor = "grabbing";
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

  // Touch events
  const handleTouchStart = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    setIsColored(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(imagePosition);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.stopPropagation();
    const x = e.touches[0].pageX;
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

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    setIsDragging(false);
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

  // Turn image back to B&W when clicking/tapping outside the frame
  useEffect(() => {
    const onDocPointer = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setIsColored(false);
      }
    };

    document.addEventListener("pointerdown", onDocPointer);
    return () => document.removeEventListener("pointerdown", onDocPointer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      {/* Image Frame Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-gray-100"
        style={{
          aspectRatio: "4/5",
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          ref={imageRef}
          src={imgUrl}
          alt={title}
          className="h-full w-auto max-w-none pointer-events-none"
          style={{
            transform: `translateX(${imagePosition}px)`,
            transition: isDragging
              ? "none"
              : "transform 0.12s ease-out, filter 180ms ease",
            filter: isColored ? "none" : "grayscale(100%)",
            objectFit: "contain",
          }}
          onLoad={handleImageLoad}
          draggable={false}
        />

        {/* Drag indicator overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full text-white text-xs backdrop-blur-sm">
          <FaArrowRightArrowLeft className="w-3 h-3" />
          <span>Drag to explore</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white pt-4 pb-2">
        <div className="flex justify-between items-start">
          {/* Left side - Title and Year */}
          <div className="space-y-1">
            <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              {title}
            </h3>
            <p className="text-sm text-gray-600">{year}</p>
          </div>

          {/* Right side - Location and Area */}
          <div className="text-right space-y-1">
            <p className="text-sm text-gray-600 uppercase">{location}</p>
            <p className="text-sm text-gray-600">AREA {area} sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullImageSlidePhotoFrame;
