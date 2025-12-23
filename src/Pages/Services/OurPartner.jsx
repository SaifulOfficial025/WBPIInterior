import React from "react";

function OurPartner() {
  return (
    <div className="w-full bg-white text-gray-800 px-0 md:px-0 py-0">
      {/* Bottom bar */}

      <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-b border-gray-400 pt-2 pb-1 gap-2">
        <span className="font-semibold text-black text-md text-left md:text-base w-full md:w-auto">
          OUR PARTNERS SERVICES | DESIGN, FF&E, SPECIFIC FIT-OUT SERVICES
        </span>
      </div>

      {/* Top: Gray info box and right-aligned list */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 px-4 md:px-0 pt-8">
        {/* Left: Gray info box */}
        <div className="bg-[#7a797a] text-white  p-8 md:p-12 flex-1 min-w-[320px] max-w-5xl">
          <div className="text-2xl font-semibold mb-4">
            OUR PARTNERS SERVICES
          </div>
          <div className="text-gray-200 text-xl font-light">
            Our partners provide specialized expertise across design
            development, FF&E consultancy and niche fit-out services to
            complement our delivery capability. We collaborate with trusted
            design studios, consultants, and suppliers selected for each
            project’s needs ensuring the right expertise, design intent, and
            technical knowledge are applied at every stage.
          </div>
        </div>
        {/* Right: List */}
        <div className="flex flex-col items-start md:items-left justify-start pt-8 md:pt-0 pr-0 md:pr-12 min-w-[420px] mt-16 mr-24">
          <div className="text-black text-xl font-normal mb-2">
            DESIGN CONSULTANCY
          </div>
          <div className="text-black text-xl font-normal mb-2">
            FF&E CONSULTANCY
          </div>
          <div className="text-black text-xl  font-normal">
            SPECIALIZED FIT-OUT PARTNERS
          </div>
        </div>
      </div>
      {/* Bottom: Full-width image grid (single image for now) */}
      <div className="w-full mt-8">
        <img
          src="/ourpartner.png"
          alt="Our Partners Services"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default OurPartner;
