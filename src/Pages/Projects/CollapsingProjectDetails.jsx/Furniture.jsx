import React, { useState } from "react";
import CustomIndicator from "../Shared/CustomIndicator";
import { MdArrowOutward } from "react-icons/md";

function Furniture({ ffeList = [], projectImages = [] }) {
  const [current, setCurrent] = useState(0);

  // Use project_images if available, otherwise use ffe_list images
  const displayItems = projectImages.length > 0 ? projectImages : ffeList;
  const total = displayItems.length || 3;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  // Get current item details for display
  const currentItem = displayItems[current];
  const currentFFE = ffeList[current];

  return (
    <div className="w-full mt-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl font-light text-gray-800 py-8">
          Furniture, Fixtures, & Equipment
        </h1>

        {/* Row 2: menu (three-line + vertical menu items) */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="flex items-start gap-4">
            <img src="/threeline.png" alt="menu" className="w-6 h-6 mt-1" />
            <div className="text-sm text-gray-700">
              <div className="mb-1">Furniture</div>
              <div className="mb-1">Lighting</div>
              <div className="mb-1">Sanitary ware</div>
            </div>
          </div>
          <div></div>
          <div></div>

          {/* Row 3: photo cards */}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayItems.map((item, idx) => (
            <div key={idx} className="bg-white">
              <div className="h-56 sm:h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image || "/furniture1.png"}
                  alt={item.title || "Furniture"}
                  className="max-h-full w-full object-contain"
                  onError={(e) => {
                    e.target.src = "/furniture1.png"; // Fallback image
                  }}
                />
              </div>

              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-400 mt-5">
                <div className="text-sm text-gray-700">
                  {item.title || "Item"}
                </div>
                <MdArrowOutward className="text-gray-600 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 4: details */}
        {currentFFE && (
          <div className="mt-6">
            <div className="flex items-start gap-3">
              <div>
                {currentFFE.description && (
                  <div className="text-md text-gray-500 mt-1">
                    {currentFFE.description}
                  </div>
                )}
                {currentFFE.dimensions && (
                  <div className="text-md text-gray-700 mt-3">
                    <span className="font-semibold">Dimensions</span>:{" "}
                    {currentFFE.dimensions}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Row 5: indicator */}
        <div className="max-w-xl mt-16 items-center mx-auto">
          <CustomIndicator
            current={current + 1}
            total={total}
            onPrev={prev}
            onNext={next}
            className="justify-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Furniture;
