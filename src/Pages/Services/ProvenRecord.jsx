import React from "react";

function ProvenRecord() {
  return (
    <div className="w-full bg-white text-gray-800 py-10 sm:py-10 py-6">
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-10 sm:gap-10 gap-6 md:gap-16 items-stretch">
        {/* Left: Image with stats overlay */}
        <div className="w-full md:w-1/2 flex items-stretch">
          <div className="relative w-full h-[320px] sm:h-[320px] h-[240px] md:h-auto overflow-hidden shadow-md">
            <img
              src="/provenrecord.png"
              alt="Proven Record Stats"
              className="object-cover w-full h-full"
            />
            {/* The stats are part of the image, so no overlay needed */}
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-4 px-2">
          <div className="text-lg sm:text-lg text-base md:text-2xl font-normal mb-4 sm:mb-4 mb-2">
            PROVEN RECORD OF SUCCESSFUL DELIVERY
          </div>
          <div className="text-gray-700 text-base sm:text-base text-sm md:text-2xl font-light mb-4 sm:mb-4 mb-2">
            Together with our trusted partners, subcontractors, and design
            collaborators, we have delivered numerous projects across the UAE
            that demonstrate our ability to:
          </div>
          <ul className="text-gray-700 text-2xl sm:text-2xl text-base font-light list-disc list-inside mb-4 sm:mb-4 mb-2 space-y-1">
            <li>Execute complex, fast-track programmes</li>
            <li>Maintain cost control and transparency</li>
            <li>Achieve high-quality finishes</li>
            <li>Coordinate multidisciplinary teams with precision</li>
            <li>Navigate stringent authority approvals</li>
            <li>Deliver predictable outcomes under demanding conditions</li>
          </ul>
          <div className="text-gray-600 text-base sm:text-base text-sm md:text-xl font-light">
            Every project showcases our commitment to excellence,
            accountability, and long-term client trust.
            <br />
            <br />
            We deliver Fit-Out with exceptional structure, strong technical and
            partnership-driven approach—supported by a long-standing in-house
            team, extensive supply chain, rigorous procurement processes, and
            real-time reporting tools. This allows us to provide fast,
            accountable, and high-quality delivery across projects of any scale.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvenRecord;
