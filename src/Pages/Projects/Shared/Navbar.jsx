import React, { useState, useEffect, useRef } from "react";
import threelinebutton from "../../../../public/threeline.png";
function Navbar({ selectedCategory = "MIXED USE", onCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const categories = ["COMMERCIAL", "RESIDENTIAL", "HOSPITALITY", "MIXED USE"];

  const handleCategoryClick = (cat) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  // open by default on desktop, closed on small screens
  useEffect(() => {
    try {
      setIsOpen(window.innerWidth >= 768);
    } catch (e) {
      setIsOpen(false);
    }
  }, []);

  // NOTE: menu will only open/close via the threeline button

  return (
    <header className="py-3 px-4" ref={wrapperRef}>
      <div className="max-w-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-sm md:text-base font-bold tracking-tight">
            PROJECTS
          </h2>

          {/* hamburger/menu icon (visible on small screens) */}
          <button
            aria-label="open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className="p-1 text-gray-800 hover:text-black"
          >
            <img src={threelinebutton} alt="Menu" className="h-4 w-4" />
          </button>
        </div>

        {/* Desktop/large-nav (slides horizontally) */}
        <div
          className="hidden md:flex items-center"
          style={{
            transition: "transform 280ms ease, opacity 220ms ease",
            transform: isOpen ? "translateX(0)" : "translateX(120%)",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <nav className="flex items-center gap-4 text-xs md:text-sm uppercase tracking-wider">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                {idx > 0 && <span className="text-gray-400">|</span>}
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`text-sm ${
                    selectedCategory === cat
                      ? "text-gray-900 font-bold"
                      : "text-gray-700"
                  } hover:text-gray-900 transition-colors`}
                >
                  {cat}
                </button>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile dropdown (animated) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out ${
          isOpen ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-2 text-sm px-2">
          {categories.map((cat, idx) => (
            <React.Fragment key={cat}>
              {idx > 0 && <div className="h-px bg-gray-200 my-1" />}
              <button
                onClick={() => {
                  handleCategoryClick(cat);
                  setIsOpen(false);
                }}
                className={`block uppercase text-left ${
                  selectedCategory === cat
                    ? "text-gray-900 font-bold"
                    : "text-gray-700"
                }`}
              >
                {cat}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
