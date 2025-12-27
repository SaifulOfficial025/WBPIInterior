import React from "react";

function OurDelivery() {
  return (
    <div className="w-full bg-transparent text-gray-800  ">
      {/* Top: Our Delivery Title and Description */}
      <div className="max-w-full bg-white">
        <div className="text-lg sm:text-lg text-base md:text-2xl font-normal mb-2 mx-16 sm:mx-16 mx-4 pt-10 sm:pt-10 pt-6">
          OUR DELIVERY
        </div>
        <div className="text-gray-600 text-xl sm:text-xl text-base md:text-xl font-light pb-10 sm:pb-10 pb-6 max-w-6xl mx-16 sm:mx-16 mx-4">
          Our Fit-Out delivery is built around a high-performance in-house team,
          long-term partnerships, a rigorously vetted supply chain, and a
          real-time reporting structure that ensures complete transparency from
          project kick-off to handover. With a combination of technical
          expertise, digital reporting tools, and strong market relationships,
          we deliver projects with absolute accountability, precision, and
          confidence.
        </div>
      </div>

      {/* Middle: Gray Box with Team List */}
      <div className="max-w-full mx-auto bg-black/50 p-8 sm:p-8 p-4 md:p-10">
        <div className="text-gray-100 text-lg sm:text-lg text-base md:text-2xl font-light mb-4 ml-8 sm:ml-8 ml-4">
          We manage the entire delivery lifecycle through a fully integrated
          team that includes:
        </div>
        <ul className="text-gray-200 text-base sm:text-base text-sm md:text-xl font-light list-disc list-inside space-y-1 mb-4 ml-8 sm:ml-8 ml-4">
          <li>Project Managers</li>
          <li>Construction Managers</li>
          <li>Site Engineers &amp; Foremen</li>
          <li>HSE Officers</li>
          <li>Authority Approval Managers</li>
          <li>MEP Managers &amp; Technical Engineers</li>
          <li>Estimation, Commercial &amp; Procurement Specialists</li>
        </ul>
        <div className="text-gray-300 text-md sm:text-md text-sm md:text-xl font-light ml-8 sm:ml-8 ml-4">
          This structured team ensures seamless coordination of complex scopes,
          proactive issue identification, and delivery to the highest standard
          of technical compliance and finish quality.
        </div>
      </div>

      {/* Bottom: Two-column section with left text and right image */}
      <div className="max-w-full flex flex-col md:flex-row items-start bg-white">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-0 mx-16 sm:mx-16 mx-4 mb-10 sm:mb-10 mb-6 md:mb-0 md:mr-10 mt-16 sm:mt-16 mt-8">
          {/* Trusted Network Section */}
          <div className="mb-8 sm:mb-8 mb-4">
            <div className="font-semibold text-base sm:text-base text-sm md:text-xl mb-2 tracking-tight uppercase">
              A TRUSTED NETWORK OF TIER-1 SUPPLIERS &amp; SPECIALIST
              SUBCONTRACTORS
            </div>
            <div className="text-gray-600 text-xl sm:text-xl text-base font-light mb-2">
              Our long-standing relationships across the UAE's fit-out ecosystem
              give us consistent access to the most reputable and reliable
              vendors. We maintain strategic partnerships with:
            </div>
            <ul className="text-gray-700 text-xl sm:text-xl text-base font-light list-disc list-inside mb-2 space-y-1">
              <li>Joinery &amp; bespoke carpentry workshops</li>
              <li>Gypsum, partitions &amp; civil works teams</li>
              <li>MEP specialists (HVAC, Electrical, Plumbing)</li>
              <li>FF&E manufacturers, suppliers &amp; logistics partners</li>
              <li>IT &amp; AV integrators</li>
            </ul>
            <div className="text-gray-500 text-md sm:text-md text-sm font-light mb-4">
              All vendors undergo a strict prequalification process covering
              technical capability, HSE performance, manpower capacity,
              financial standing, and previous track record. Only proven
              partners are deployed on our projects, ensuring predictable
              quality, commercial stability, and programme reliability.
            </div>
          </div>
          {/* Seamless Collaboration Section */}
          <div>
            <div className="font-semibold text-base sm:text-base text-sm md:text-xl mb-2 tracking-tight uppercase">
              SEAMLESS COLLABORATION WITH MARKET-BEST DESIGN STUDIOS
            </div>
            <div className="text-gray-600 text-xl sm:text-xl text-base font-light mb-2">
              Under a Design &amp; Fit-Out model, we partner with:
            </div>
            <ul className="text-gray-700 text-xl sm:text-xl text-base font-light list-disc list-inside mb-2 space-y-1">
              <li>Tier-1 architectural and interior design firms</li>
              <li>Boutique creative studios</li>
              <li>
                Sector-specialised designers (corporate, hospitality, retail,
                F&amp;B)
              </li>
            </ul>
            <div className="text-gray-500 text-md sm:text-md text-sm font-light">
              This ensures clients receive the right design partner for their
              vision, balancing creativity with technical feasibility, budget
              discipline, and buildability.
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 min-w-0 flex justify-center items-start mt-16 sm:mt-16 mt-8">
          <img
            src="/ourdelivery.png"
            alt="Our Delivery Partnerships"
            className="object-cover w-full max-w-[400px] md:max-w-[420px] lg:max-w-[480px] h-auto shadow-md justify-end items-end"
          />
        </div>
      </div>
    </div>
  );
}

export default OurDelivery;
