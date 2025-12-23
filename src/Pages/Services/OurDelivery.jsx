import React from "react";

function OurDelivery() {
  return (
    <div className="w-full bg-white text-gray-800  py-10">
      {/* Top: Our Delivery Title and Description */}
      <div className="max-w-full mx-16">
        <div className="text-lg md:text-2xl font-normal mb-2">OUR DELIVERY</div>
        <div className="text-gray-600 text-xl md:text-xl font-light mb-10 max-w-6xl">
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
      <div className="max-w-full mx-auto bg-[#8B8987]  p-8 md:p-10 mb-12">
        <div className="text-gray-100 text-lg md:text-2xl font-light mb-4">
          We manage the entire delivery lifecycle through a fully integrated
          team that includes:
        </div>
        <ul className="text-gray-200 text-base md:text-xl font-light list-disc list-inside space-y-1 mb-4">
          <li>Project Managers</li>
          <li>Construction Managers</li>
          <li>Site Engineers &amp; Foremen</li>
          <li>HSE Officers</li>
          <li>Authority Approval Managers</li>
          <li>MEP Managers &amp; Technical Engineers</li>
          <li>Estimation, Commercial &amp; Procurement Specialists</li>
        </ul>
        <div className="text-gray-300 text-md md:text-xl font-light">
          This structured team ensures seamless coordination of complex scopes,
          proactive issue identification, and delivery to the highest standard
          of technical compliance and finish quality.
        </div>
      </div>

      {/* Bottom: Two-column section with left text and right image */}
      <div className="max-w-full mx-16 flex flex-col md:flex-row  items-start">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-0">
          {/* Trusted Network Section */}
          <div className="mb-8">
            <div className="font-semibold text-base md:text-xl mb-2 tracking-tight uppercase">
              A TRUSTED NETWORK OF TIER-1 SUPPLIERS &amp; SPECIALIST
              SUBCONTRACTORS
            </div>
            <div className="text-gray-600 text-xl font-light mb-2">
              Our long-standing relationships across the UAE’s fit-out ecosystem
              give us consistent access to the most reputable and reliable
              vendors. We maintain strategic partnerships with:
            </div>
            <ul className="text-gray-700 text-xl font-light list-disc list-inside mb-2 space-y-1">
              <li>Joinery &amp; bespoke carpentry workshops</li>
              <li>Gypsum, partitions &amp; civil works teams</li>
              <li>MEP specialists (HVAC, Electrical, Plumbing)</li>
              <li>FF&E manufacturers, suppliers &amp; logistics partners</li>
              <li>IT &amp; AV integrators</li>
            </ul>
            <div className="text-gray-500 text-md font-light mb-4">
              All vendors undergo a strict prequalification process covering
              technical capability, HSE performance, manpower capacity,
              financial standing, and previous track record. Only proven
              partners are deployed on our projects, ensuring predictable
              quality, commercial stability, and programme reliability.
            </div>
          </div>
          {/* Seamless Collaboration Section */}
          <div>
            <div className="font-semibold text-base md:text-xl mb-2 tracking-tight uppercase">
              SEAMLESS COLLABORATION WITH MARKET-BEST DESIGN STUDIOS
            </div>
            <div className="text-gray-600 text-xl font-light mb-2">
              Under a Design &amp; Fit-Out model, we partner with:
            </div>
            <ul className="text-gray-700 text-xl font-light list-disc list-inside mb-2 space-y-1">
              <li>Tier-1 architectural and interior design firms</li>
              <li>Boutique creative studios</li>
              <li>
                Sector-specialised designers (corporate, hospitality, retail,
                F&amp;B)
              </li>
            </ul>
            <div className="text-gray-500 text-md font-light">
              This ensures clients receive the right design partner for their
              vision, balancing creativity with technical feasibility, budget
              discipline, and buildability.
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 min-w-0 flex justify-center items-start">
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
