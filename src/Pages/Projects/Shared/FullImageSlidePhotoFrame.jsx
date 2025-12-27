import React, { useRef, useState, useEffect } from "react";

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
  const [imagePosition, setImagePosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isColored, setIsColored] = useState(false);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

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

  // Auto-pan animation on hover
  const animatePan = () => {
    const phase1Start = -maxScroll; // Start at right
    const phase1End = 0; // Pan to left
    const phase2Start = 0; // Start from left
    const phase2End = -maxScroll; // Pan to right
    const phaseDuration = 3000; // 3 seconds each phase
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;

      // Phase 1: Right to Left (0 to 2000ms)
      if (elapsed < phaseDuration) {
        const progress = elapsed / phaseDuration;
        const newPosition = phase1Start + (phase1End - phase1Start) * progress;
        setImagePosition(newPosition);
        animationFrameRef.current = requestAnimationFrame(animate);
      }
      // Phase 2: Left to Right (2000ms to 4000ms)
      else if (elapsed < phaseDuration * 2) {
        const progress = (elapsed - phaseDuration) / phaseDuration;
        const newPosition = phase2Start + (phase2End - phase2Start) * progress;
        setImagePosition(newPosition);
        animationFrameRef.current = requestAnimationFrame(animate);
      }
      // Animation complete - stop
      else {
        setImagePosition(phase2End);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => {
    setIsColored(true);
    if (maxScroll > 0) {
      // Cancel any ongoing animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animatePan();
    }
  };

  const handleMouseLeave = () => {
    setIsColored(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
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

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg mx-auto select-none">
      {/* Image Frame Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-gray-100"
        style={{
          aspectRatio: "4/5",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={imgUrl}
          alt={title}
          className="h-full w-auto max-w-none pointer-events-none"
          style={{
            transform: `translateX(${imagePosition}px)`,
            transition: "filter 180ms ease",
            filter: isColored ? "none" : "grayscale(100%)",
            objectFit: "contain",
          }}
          onLoad={handleImageLoad}
          draggable={false}
        />

        {/* Hover indicator overlay */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/40 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-white text-[10px] sm:text-xs backdrop-blur-sm">
          <span>Hover to explore</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white pt-3 sm:pt-4 pb-1 sm:pb-2 px-1 sm:px-0">
        <div className="flex justify-between items-start gap-2 sm:gap-4">
          {/* Left side - Title and Year */}
          <div className="space-y-0.5 sm:space-y-1 flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-bold tracking-wide text-gray-900 uppercase truncate">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{year}</p>
          </div>

          {/* Right side - Location and Area */}
          <div className="text-right space-y-0.5 sm:space-y-1 flex-shrink-0">
            <p className="text-[10px] sm:text-sm text-gray-600 uppercase">
              {location}
            </p>
            <p className="text-[10px] sm:text-sm text-gray-600">
              AREA {area} sqft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullImageSlidePhotoFrame;
