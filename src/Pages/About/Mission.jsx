import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

function Mission() {
  return (
    <div className="w-full bg-white text-gray-800 pt-4 mb-16">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-stretch">
        {/* Left: Mission/Vision image and overlays */}
        <div className="w-full md:w-1/2 relative min-h-[420px] flex items-stretch">
          <img
            src="/mission.png"
            alt="Mission and Vision"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Core Values */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 py-10 md:py-20">
          <div className="text-3xl font-semibold mb-8">CORE VALUES</div>
          <div className="flex items-start gap-4 mb-4">
            <div className="text-lg font-light tracking-widest mr-2">BE</div>
            <div className="flex flex-col gap-4 w-full">
              {/* Core Value Row */}
              <div className="flex items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-3xl w-12 -mt-5 -mr-5">
                  B
                </span>
                <span className="font-light text-xs w-28 tracking-widest text-left">
                  OLD
                </span>
                <span className="text-gray-600 text-lg font-light ml-4 w-80">
                  Push creative and operational boundaries through confident
                  ideas and decisive execution.
                </span>
              </div>
              <div className="flex items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-3xl w-12 -mt-5 -mr-5">
                  R
                </span>
                <span className="font-light text-xs w-28 tracking-widest text-left">
                  ELIABLE
                </span>
                <span className="text-gray-600 text-lg font-light ml-4 w-80">
                  Deliver on every promise with consistency, integrity, and
                  precision.
                </span>
              </div>
              <div className="flex items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-3xl w-12 -mt-5 -mr-5">
                  A
                </span>
                <span className="font-light text-xs w-28 tracking-widest text-left">
                  GILE
                </span>
                <span className="text-gray-600 text-lg font-light ml-4 w-80">
                  Adapt fast to requirements and in planning, to provide
                  effective solutions.
                </span>
              </div>
              <div className="flex items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-3xl w-12 -mt-5 -mr-5">
                  V
                </span>
                <span className="font-light text-xs w-28 tracking-widest text-left">
                  IGILANT
                </span>
                <span className="text-gray-600 text-lg font-light ml-4 w-80">
                  Maintain constant attention to detail through active
                  supervision, quality control, and proactive risk management.
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-3xl w-12 -mt-5 -mr-5">
                  E
                </span>
                <span className="font-light text-xs w-28 tracking-widest text-left">
                  FFICIENT
                </span>
                <span className="text-gray-600 text-lg font-light ml-4 w-80">
                  Work with clarity and discipline through smart procedures, and
                  controlled execution.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom: Portfolio */}
      <div className="w-full mt-8 px-4 md:px-12">
        <div className="text-xl font-semibold tracking-wide border-b border-gray-300 pb-4 mb-4">
          PORTFOLIO
        </div>
        <div className="text-xl text-gray-600 flex items-center gap-2">
          Portfolio 2025 <IoMdArrowRoundDown className="text-black" />
        </div>
      </div>
    </div>
  );
}

export default Mission;
