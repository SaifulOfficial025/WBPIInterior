import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FullScreenImage({ imgUrl, galleryImages = [], onSeeDetails }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine project cover image and gallery images
  const allImages = [
    { image: imgUrl, title: "Project Cover" },
    ...galleryImages,
  ];

  const currentImage = allImages[currentImageIndex]?.image || imgUrl;

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

  // Reset position when image changes
  useEffect(() => {
    if (containerRef.current && imageRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const naturalWidth = imageRef.current.naturalWidth;
      const naturalHeight = imageRef.current.naturalHeight;

      if (naturalWidth && naturalHeight) {
        const aspectRatio = naturalWidth / naturalHeight;
        const renderedWidth = containerHeight * aspectRatio;
        const scrollRange = Math.max(0, renderedWidth - containerWidth);
        setMaxScroll(scrollRange);

        // Center the image
        if (scrollRange > 0) {
          setImagePosition(-scrollRange / 2);
        } else {
          setImagePosition(0);
        }
      }
    }
  }, [currentImageIndex]);

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

  // Navigation handlers
  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentImageIndex < allImages.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen overflow-hidden bg-white z-[9999]"
      style={{
        cursor: "grab",
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={currentImage}
        alt="Full Screen"
        className="w-full h-full pointer-events-none"
        style={{
          objectFit: "cover",
        }}
        onLoad={handleImageLoad}
        draggable={false}
      />

      {/* Close Button - Top Right */}
      {/* <Link to="/projects"> */}
      <button
        onClick={() => window.location.reload()}
        className="absolute top-4 sm:top-4 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center  hover:bg-white/20 text-white rounded-full transition-colors "
        aria-label="Close Full Screen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* </Link> */}

      {/* Bottom Navigation Layer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 bg-black/30 backdrop-blur-sm">
        {/* Left side - empty for spacing */}
        <div className="flex-1"></div>

        {/* Center side - prev/next buttons */}
        <div className="flex items-center gap-8 sm:gap-12">
          <button
            onClick={handlePrev}
            disabled={currentImageIndex === 0}
            className={`text-white text-3xl sm:text-4xl transition-opacity ${
              currentImageIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:opacity-70"
            }`}
            aria-label="Previous Image"
          >
            &#x3C;
          </button>
          <button
            onClick={handleNext}
            disabled={currentImageIndex === allImages.length - 1}
            className={`text-white text-3xl sm:text-4xl transition-opacity ${
              currentImageIndex === allImages.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:opacity-70"
            }`}
            aria-label="Next Image"
          >
            &#x3E;
          </button>
        </div>

        {/* Right side - see more details button */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={onSeeDetails}
            className="px-4 sm:px-8  text-white text-sm sm:text-base font-semibold rounded-full hover:text-black transition-colors  whitespace-nowrap"
          >
            SEE MORE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenImage;
