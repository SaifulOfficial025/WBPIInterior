import React from "react";

function MoreInfo() {
  return (
    <div className="w-full bg-white text-gray-800 pt-4">
      {/* Top: More Information label */}
      <div className="text-2xl sm:text-2xl text-xl font-semibold tracking-wide px-4 md:px-0 mb-2 ml-6 sm:ml-6 ml-4 mt-16 sm:mt-16 mt-8">
        MORE INFORMATION
      </div>
      {/* Main content: left award, right stats */}
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-stretch gap-0">
        {/* Left: Award image */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8 sm:py-8 py-4">
          <img
            src="/moreinfo2.png"
            alt="Identity Design Awards 2024"
            className="w-[320px] sm:w-[320px] w-[240px] md:w-[340px] lg:w-[380px] h-auto"
          />
        </div>
        {/* Right: Stats image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-8 sm:py-8 py-4">
          <img
            src="/moreinfo1.png"
            alt="Company Stats"
            className="w-full max-w-[420px] sm:max-w-[420px] max-w-[320px] md:max-w-[480px] h-auto object-cover"
          />
        </div>
      </div>
      {/* Bottom: Design pattern */}
      <div className="w-full mt-2">
        <img
          src="/options.png"
          alt="Design Pattern"
          className="w-full object-cover max-h-16 sm:max-h-16 max-h-12"
        />
      </div>
      {/* Bottom: Tagline */}

      <div className="max-w-full text-md sm:text-md text-sm font-light text-black mt-8 sm:mt-8 mt-4 border-b border-gray-300 mb-16 sm:mb-16 mb-8 pb-2 px-4 sm:px-0">
        <span className="block ml-0 sm:ml-6 leading-relaxed sm:text-md text-sm text-justify">
          AT WBP INTERIORS, EVERY PROJECT IS DRIVEN BY PURPOSE, PRECISION, AND
          ACCOUNTABILITY. OUR VISION, MISSION, AND VALUES GUIDE HOW WE THINK,
          BUILD, AND DELIVER, ENSURING CONSISTENCY IN QUALITY AND CONFIDENCE IN
          EVERY OUTCOME.
        </span>
      </div>
    </div>
  );
}

export default MoreInfo;
