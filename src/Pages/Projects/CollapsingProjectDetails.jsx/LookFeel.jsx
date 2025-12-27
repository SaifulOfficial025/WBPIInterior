import React from "react";

function LookFeel() {
  return (
    <div className="w-full mt-8 sm:mt-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Heading */}
        <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-light text-gray-800 py-4 sm:py-8">
          Look & Feel
        </h1>

        {/* Row 2: Sub-heading at left */}
        <div className="mb-4 sm:mb-6">
          <div className="text-lg sm:text-2xl font-semibold text-gray-800">
            Warm Modern
          </div>
          <div className="text-lg sm:text-2xl font-semibold text-gray-800">
            Corporate Identity
          </div>
        </div>

        {/* Row 3: two columns: left image, right (text then image) */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 sm:gap-8 items-start">
          <div className="bg-white">
            <div className="overflow-hidden rounded-sm shadow-sm h-[300px] sm:h-[520px] lg:h-[640px]">
              <img
                src="/lookfeels1.png"
                alt="Look & Feel main"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-6">
            <div className="text-md sm:text-md text-gray-700 font-semibold leading-relaxed max-w-full lg:max-w-[380px]">
              <p className="mb-2 sm:mb-3">
                This material palette reflects a warm contemporary aesthetic
                aligned with Property Finder's corporate colour identity.
                Natural terrazzo, terracotta accents, and soft neutral finishes
                create a balanced and timeless foundation, while wood textures
                and greenery add warmth and approachability.
              </p>

              <p className="mb-3 sm:mb-4">
                Refined metallic details, tinted glass, and layered fabrics
                introduce depth and a modern edge, resulting in a cohesive,
                brand-aligned interior language that feels professional,
                welcoming, and enduring.
              </p>

              <p className="text-sm sm:text-md text-gray-600">
                Fit-Out Price:{" "}
                <span className="text-gray-900 font-semibold">635</span> / ft2
              </p>
              <p className="text-sm sm:text-md text-gray-600">
                FF&E Price:{" "}
                <span className="text-gray-900 font-semibold">42</span> / ft2
              </p>
            </div>

            <div className="overflow-hidden rounded-sm shadow-sm">
              <img
                src="/lookfeels2.png"
                alt="Look & Feel secondary"
                className="w-xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookFeel;
