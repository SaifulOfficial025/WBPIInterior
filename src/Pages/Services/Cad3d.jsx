import React from "react";

function Cad3d() {
  return (
    <div className="w-full bg-white text-gray-800 px-0 md:px-0 py-0">
      {/* Top bar */}
      <div className="pt-16 w-full px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-b border-gray-400 pt-2 pb-1 gap-2 ">
        <span className="font-semibold text-black text-md text-left md:text-base w-full md:w-auto ">
          TECHNICAL DRAFTING & VISUALIZATIONS | STANDARDIZED QUALITY OF
          TECHNICAL DESIGN AND VISUALIZE YOUR CREATION.
        </span>
        <span className="text-[#E31E24] text-xs font-semibold whitespace-nowrap mt-2 md:mt-0">
          COMING SOON
        </span>
      </div>
      {/* Main content */}
      <div className="max-w-full mx-16 flex flex-col md:flex-row  py-8 ">
        {/* Left: Text content */}
        <div className="w-full flex flex-col gap-6">
          <div>
            <div className="text-2xl font-normal mb-2">CAD &amp; 3D</div>
            <div className="text-gray-500 text-xl font-light mb-4 max-w-full">
              We deliver high-precision technical documentation and visual
              outputs through using AutoCAD and advanced 3D rendering softwares.
              Our workflow follows a structured, multi-stage Quality Control
              (QC) process to minimize variances and prevent costly errors. This
              commitment to standardization ensures that every drawing,
              elevation, and detail is accurate, consistent, and
              execution-ready, giving all stakeholders reliable information for
              smooth delivery and predictable outcomes.
            </div>
          </div>
          {/* Gray info box */}
          <div className="bg-[#767374] text-gray-100 text-xl font-light  p-8 max-w-lg mb-2 mx-auto">
            We support design partners with in-house drafting services to
            deliver fully standardized, execution-ready documentation. This
            ensures all drawings meet the same level of detail, formatting, and
            technical requirements, eliminating inconsistencies caused by
            varying standards, tight deadlines, or different design practices,
            and providing a reliable basis for construction.
          </div>
          {/* Key Benefits */}
          <div>
            <div className="text-2xl font-semibold mb-2">KEY BENEFITS</div>
            <ul className="text-gray-700 text-xl  list-disc list-inside space-y-1">
              <li>Precise, standardized drawings for error-free execution</li>
              <li>
                Clear communication for contractors, consultants and authorities
              </li>
              <li>Reduced rework, variations, and site misunderstandings</li>
              <li>3D visualisation for confident decision-making</li>
              <li>Realistic previews of materials, lighting, and finishes</li>
              <li>Full alignment between concept and final build</li>
            </ul>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <img
            src="/cad3d.png"
            alt="CAD and 3D Visualisation"
            className="object-contain w-full max-w-[540px] h-auto border-8 border-[#767374] bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Cad3d;
