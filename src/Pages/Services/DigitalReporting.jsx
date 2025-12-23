import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function DigitalReporting() {
  return (
    <div className="w-full bg-white text-gray-800  py-10 space-y-16">
      {/* Section 1: Digital Reporting & Transparency */}
      <div className="max-w-full mx-16 flex flex-col md:flex-row items-center ">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/digitalreport1.png"
            alt="Digital Reporting Charts"
            className=" object-cover w-full max-w-[680px] h-auto shadow-md"
          />
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-2xl md:text-2xl font-semibold mb-4 text-black">
            DIGITAL REPORTING &amp; FULL TRANSPARENCY AT EVERY STAGE
          </div>
          <div className="text-gray-600 text-base md:text-xl font-light mb-8 max-w-xl">
            Transparency is one of our strongest differentiators. We use online
            reporting tools and real-time visualization to ensure the client
            always has complete visibility on progress, cost, and programme. Our
            reporting ecosystem includes:
          </div>
          <div className="flex justify-end">
            <button className="text-black text-base font-medium flex items-center gap-2 group hover:underline transition-all">
              REPORTING DETAILS
              <span className="ml-1 group-hover:translate-x-1 transition-transform">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: Scalable Delivery */}
      <div className="max-w-full mx-auto relative  overflow-hidden">
        <img
          src="/digitalreport2.png"
          alt="Scalable Delivery"
          className="w-full h-auto object-cover min-h-[180px]"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="text-white text-base md:text-2xl font-semibold mb-2">
            SCALABLE DELIVERY FOR ANY PROJECT SIZE
          </div>
          <div className="text-gray-200 text-sm md:text-2xl font-light max-w-5xl">
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
