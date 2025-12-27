import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ReportingToggle from "./ReportingToggle";

function DigitalReporting() {
  const [showToggle, setShowToggle] = useState(false);
  return (
    <div className="w-full bg-white text-gray-800 py-10 sm:py-10 py-6 space-y-16 sm:space-y-16 space-y-8">
      {/* Section 1: Digital Reporting & Transparency */}
      <div className="max-w-full mx-16 sm:mx-16 mx-4 flex flex-col md:flex-row items-center ">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/digitalreport1.png"
            alt="Digital Reporting Charts"
            className="object-cover w-full max-w-[680px] h-auto shadow-md"
          />
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 sm:mt-6 mt-4 md:mt-0">
          <div className="text-2xl sm:text-2xl text-xl md:text-2xl font-semibold mb-4 sm:mb-4 mb-2 text-black">
            DIGITAL REPORTING &amp; FULL TRANSPARENCY AT EVERY STAGE
          </div>
          <div className="text-gray-600 text-base sm:text-base text-sm md:text-xl font-light mb-8 sm:mb-8 mb-4 max-w-xl">
            Transparency is one of our strongest differentiators. We use online
            reporting tools and real-time visualization to ensure the client
            always has complete visibility on progress, cost, and programme. Our
            reporting ecosystem includes:
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="text-black text-base sm:text-base text-sm font-medium flex items-center gap-2 group hover:underline transition-all mr-24 sm:mr-24 mr-4 -mt-16 sm:-mt-16 -mt-8"
          onClick={() => setShowToggle((v) => !v)}
        >
          REPORTING DETAILS
          <span className="ml-1 group-hover:translate-x-1 transition-transform">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      {showToggle && (
        <div className="mt-8 w-full">
          <ReportingToggle />
        </div>
      )}

      {/* Section 2: Scalable Delivery */}
      <div className="max-w-full mx-auto relative overflow-hidden">
        <img
          src="/digitalreport2.png"
          alt="Scalable Delivery"
          className="w-full h-auto object-cover min-h-[180px] sm:min-h-[180px] min-h-[120px]"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-6 p-3 md:p-8 mb-2 sm:mb-2 mb-1">
          <div className="text-white text-base sm:text-base text-sm md:text-2xl font-semibold mb-2 ml-8 sm:ml-8 ml-2">
            SCALABLE DELIVERY FOR ANY PROJECT SIZE
          </div>
          <div className="text-gray-200 text-sm sm:text-sm text-xs md:text-2xl font-light max-w-5xl ml-8 sm:ml-8 ml-2">
            Our scalable delivery model allows us to efficiently manage
            everything from boutique fit-outs to complex, large-scale commercial
            projects. With a streamlined structure and robust partner network,
            we can perform optimally at every scale, ensuring predictable
            results, speedy turnaround, and consistently positive project
            outcomes.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalReporting;
