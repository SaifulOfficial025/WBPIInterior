import React from "react";

function LookFeel({
  title = "Warm Modern Corporate Identity",
  description = "",
  fitOutPrice = "635.00",
  ffePrice = "42.00",
  image = "/lookfeels1.png",
  paletteImage = "/lookfeels2.png",
}) {
  // Split title into lines for display
  const titleLines = title.split(/\n|(?<=\s)/);

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
            {title}
          </div>
        </div>

        {/* Row 3: two columns: left image, right (text then image) */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 sm:gap-8 items-start">
          <div className="bg-white">
            <div className="overflow-hidden rounded-sm shadow-sm h-[300px] sm:h-[520px] lg:h-[640px]">
              <img
                src={image}
                alt="Look & Feel main"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/lookfeels1.png"; // Fallback image
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-6">
            <div className="text-md sm:text-md text-gray-700 font-semibold leading-relaxed max-w-full lg:max-w-[380px]">
              {description &&
                description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-2 sm:mb-3">
                    {paragraph}
                  </p>
                ))}

              <p className="text-sm sm:text-md text-gray-600">
                Fit-Out Price:{" "}
                <span className="text-gray-900 font-semibold">
                  {fitOutPrice}
                </span>{" "}
                / ft2
              </p>
              <p className="text-sm sm:text-md text-gray-600">
                FF&E Price:{" "}
                <span className="text-gray-900 font-semibold">{ffePrice}</span>{" "}
                / ft2
              </p>
            </div>

            <div className="overflow-hidden rounded-sm shadow-sm">
              <img
                src={paletteImage}
                alt="Look & Feel palette"
                className="w-xl h-auto object-contain"
                onError={(e) => {
                  e.target.src = "/lookfeels2.png"; // Fallback image
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookFeel;
