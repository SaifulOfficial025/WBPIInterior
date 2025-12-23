import React from "react";

function Enlaps() {
  return (
    <div className="w-full bg-white text-gray-800 px-0 md:px-0 py-0 mt-16">
      {/* Top: Title and description */}
      <div className="max-w-full mx-16 pt-8 pb-2 px-4 md:px-0">
        <div className="text-md text-black font-semibold tracking-wide mb-2 border-b border-gray-300 pb-1">
          ENLAPS | TIMELAPSE/HYPERLAPSE | CAPTURE DEVELOPMENT OF YOUR VISION
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mt-8">
          {/* Left: Title and main description */}
          <div className="flex-1 min-w-0">
            <div className="text-2xl font-normal mb-4">ENLAPS</div>
            <div className="text-gray-600 text-xl font-light max-w-2xl mb-2">
              We use myTikee by Enlaps to document the project from start to
              completion through professional time-lapse capture.
              High-resolution images obtained from site intervals create clear
              visual timelines of activity, helping clients and stakeholders
              understand progress, sequencing, and execution quality.
            </div>
            <div className="text-gray-600 text-xl font-light max-w-2xl mb-2">
              Time-lapse records support reporting, milestone verification, and
              professional documentation, while also generating premium
              marketing content that showcases delivery of your vision. This
              technology strengthens accountability, improves communication, and
              provides lasting visual archive of the project journey.
            </div>
          </div>
          {/* Right: Gray box */}
          <div className="flex-1 min-w-0 flex md:justify-end mt-10">
            <div className="bg-[#767374] text-gray-100 text-xl font-light  p-6 max-w-md w-full md:w-[540px]">
              Enlaps adds a new dimension to project reporting by transforming
              construction activity into clear, engaging visuals, sites,
              enhancing transparency, strengthening accountability, and creating
              powerful content for communication and marketing.
            </div>
          </div>
        </div>
      </div>
      {/* Bottom: Image with overlayed text */}
      <div className="w-full relative mt-8">
        <img
          src="/enlaps.png"
          alt="Enlaps Timelapse"
          className="w-full h-auto object-cover min-h-[220px]"
        />
      </div>
    </div>
  );
}

export default Enlaps;
