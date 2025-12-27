import React from "react";

function TraditionalFitout() {
  return (
    <div className="w-full bg-black/50 text-gray-800">
      {/* Badge and description */}
      <div className="max-w-full  px-4 pt-8 bg-white py-2">
        <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-md font-medium mb-4 mx-16">
          TRADITIONAL FIT-OUT
        </div>
        <div className="mt-2 text-gray-500 text-2xl font-light max-w-7xl mx-16">
          <p className="mb-4">
            This approach is ideal when the full design package has already been
            completed by the client’s appointed consultant and the project
            requires a contractor who can execute the design with precision and
            ensure seamless delivery from shop drawings to work completion.
          </p>
          <p className="mb-4">
            Pricing is verified either through a competitive tender process or
            through the client’s appointed cost consultant. Thanks to the low
            operational overheads and our ability to scale resources through
            trusted partners to precisely match the project’s needs, we
            consistently offer highly competitive pricing without compromising
            quality, programme, or delivery standards.
          </p>
        </div>
        <div className="mt-6 mb-10 text-xl  font-semibold text-black mx-16 ">
          Premium quality, delivered with efficient cost!
        </div>
      </div>

      {/* Key benefits and image split */}
      <div className="w-full flex flex-col md:flex-row bg-transparent mt-12  overflow-hidden shadow-lg">
        {/* Left: Key Benefits */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center ml-12">
          <div className="text-white text-2xl font-semibold mb-6">
            KEY BENEFITS
          </div>
          <ul className="text-gray-200 text-2xl font-light space-y-4 list-disc list-inside">
            <li>
              Design support to the Design Consultant through our in-house
              engineering and technical team
            </li>
            <li>
              Full contractor management and procurement, engaging pre-qualified
              Tier-1 vendors
            </li>
            <li>
              Detailed and fully transparent reporting, including structured
              remote reporting where required
            </li>
            <li>
              Comprehensive execution plan, covering programme, sequencing, and
              cost structure
            </li>
            <li>
              Standardized quality control procedures, with scheduled on-site
              and off-site inspections
            </li>
            <li>
              High-quality project delivery, fully aligned with the approved
              design intent
            </li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-[320px] md:h-auto relative">
          <img
            src="/traditionfitout.png"
            alt="Traditional Fitout Key Benefits"
            className="object-cover w-full h-full pr-10"
          />
        </div>
      </div>
      <div className="h-12" />
    </div>
  );
}

export default TraditionalFitout;
