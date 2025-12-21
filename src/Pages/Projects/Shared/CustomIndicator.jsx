import React, { useRef, useEffect, useState } from "react";

function CustomIndicator({
  current = 1,
  total = 1,
  onPrev = () => {},
  onNext = () => {},
  className = "",
}) {
  const indicatorWidth = 64; // px, fixed bold segment width
  const trackRef = useRef(null);
  const [leftPx, setLeftPx] = useState(0);

  const updatePosition = () => {
    const track = trackRef.current;
    if (!track) return;
    const w = track.clientWidth;
    const avail = Math.max(0, w - indicatorWidth);
    const normalized = total > 1 ? (current - 1) / (total - 1) : 0;
    const pct = Math.max(0, Math.min(1, normalized));
    setLeftPx(Math.round(pct * avail));
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [current, total]);

  return (
    <div className={`flex items-center text-sm text-gray-700 ${className}`}>
      <button
        onClick={onPrev}
        disabled={current <= 1}
        className={`px-2 py-1 text-left ${
          current <= 1 ? "text-gray-400" : "text-gray-700 hover:text-black"
        }`}
      >
        Prev
      </button>

      <div
        ref={trackRef}
        className="relative flex-1 mx-3 h-8 flex items-center"
      >
        {/* thin background line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-300" />

        {/* bold moving segment (leftPx controls left position) */}
        <div
          className="absolute bg-gray-800 rounded-sm"
          style={{
            left: `${leftPx}px`,
            width: `${indicatorWidth}px`,
            height: 4,
            top: "50%",
            transform: "translateY(-50%)",
            transition: "left 260ms ease",
          }}
          aria-hidden
        />

        {/* fraction above the line */}
        <div
          className="absolute z-10"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -140%)",
          }}
        >
          <div className="px-3 bg-white font-medium tracking-wide">
            {current}/{total}
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={current >= total}
        className={`px-2 py-1 text-right ${
          current >= total ? "text-gray-400" : "text-gray-700 hover:text-black"
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default CustomIndicator;
