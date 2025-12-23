import React from "react";

function Matterport() {
  return (
    <div className="w-full bg-white text-gray-800 px-0 md:px-0 py-0">
      <div className="w-full flex flex-col md:flex-row min-h-[420px]">
        {/* Left: Gray panel with text and QR */}
        <div className="w-full md:w-1/2 bg-[#767374] text-white flex flex-col justify-between p-8 md:p-12 lg:p-16">
          <div>
            <div className="text-2xl font-normal mb-6">
              MATTERPORT TECHNOLOGY
            </div>
            <div className="text-gray-200 text-xl font-light mb-6 max-w-2xl">
              We integrate Matterport 3D scanning into both design development
              and construction delivery to elevate accuracy, transparency, and
              client experience. During the design phase, high-resolution scans
              capture existing conditions in precise detail, allowing our team
              to verify dimensions, coordinate layouts, and produce reliable
              as-built documentation. This significantly reduces design
              assumptions, site discrepancies, and costly revisions.
            </div>
            <div className="text-gray-200 text-xl font-light mb-6 max-w-2xl">
              Throughout construction, regular scans provide immersive virtual
              walkthroughs and visual progress reports, allowing clients and
              stakeholders to remotely explore the site as if they were
              physically present. This technology ensures complete transparency,
              enabling informed decision-making, faster approvals, and stronger
              project control, especially valuable for international clients or
              those unable to attend the site frequently.
            </div>
            <div className="text-gray-200 text-xl font-light max-w-2xl">
              By combining digital capture with design intelligence, we
              transform the way projects are monitored, communicated, and
              delivered, resulting in greater confidence, fewer surprises, and a
              smoother project journey from concept to completion.
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start">
            <img
              src="/matterportqr.png"
              alt="Matterport QR"
              className="w-24 h-24 mb-2"
            />
            <span className="text-gray-300 text-xl font-light">SCAN ME</span>
          </div>
        </div>
        {/* Right: Main image */}
        <div className="w-full md:w-1/2 flex items-stretch">
          <img
            src="/matterport.png"
            alt="Matterport Technology"
            className="object-cover w-full h-full min-h-[420px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Matterport;
