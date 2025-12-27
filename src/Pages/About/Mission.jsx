import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

function Mission() {
  return (
    <div className="w-full bg-white text-gray-800 pt-4 mb-16 sm:mb-16 mb-8">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-stretch">
        {/* Left: Mission/Vision image and overlays */}
        <div className="w-full md:w-1/2 relative min-h-[420px] sm:min-h-[420px] min-h-[280px] flex items-stretch">
          <img
            src="/mission.png"
            alt="Mission and Vision"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Core Values */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 py-10 sm:py-10 py-6 md:py-20">
          <div className="text-3xl sm:text-3xl text-2xl font-semibold mb-8 sm:mb-8 mb-4">
            CORE VALUES
          </div>
          <div className="flex items-start gap-2 sm:gap-4 mb-4">
            <div className="text-lg sm:text-lg text-sm font-light tracking-widest mr-1 sm:mr-2 mt-1">
              BE
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              {/* Core Value Row */}
              <div className="flex items-start sm:items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-2xl sm:text-3xl w-6 sm:w-12 -mt-4 sm:-mt-5 -mr-2 sm:-mr-5 flex-shrink-0">
                  B
                </span>
                <span className="font-light text-[10px] sm:text-xs w-16 sm:w-28 tracking-widest text-left flex-shrink-0">
                  OLD
                </span>
                <span className="text-gray-600 text-xs sm:text-lg font-light ml-2 sm:ml-4 flex-1">
                  Push creative and operational boundaries through confident
                  ideas and decisive execution.
                </span>
              </div>
              <div className="flex items-start sm:items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-2xl sm:text-3xl w-6 sm:w-12 -mt-4 sm:-mt-5 -mr-2 sm:-mr-5 flex-shrink-0">
                  R
                </span>
                <span className="font-light text-[10px] sm:text-xs w-16 sm:w-28 tracking-widest text-left flex-shrink-0">
                  ELIABLE
                </span>
                <span className="text-gray-600 text-xs sm:text-lg font-light ml-2 sm:ml-4 flex-1">
                  Deliver on every promise with consistency, integrity, and
                  precision.
                </span>
              </div>
              <div className="flex items-start sm:items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-2xl sm:text-3xl w-6 sm:w-12 -mt-4 sm:-mt-5 -mr-2 sm:-mr-5 flex-shrink-0">
                  A
                </span>
                <span className="font-light text-[10px] sm:text-xs w-16 sm:w-28 tracking-widest text-left flex-shrink-0">
                  GILE
                </span>
                <span className="text-gray-600 text-xs sm:text-lg font-light ml-2 sm:ml-4 flex-1">
                  Adapt fast to requirements and in planning, to provide
                  effective solutions.
                </span>
              </div>
              <div className="flex items-start sm:items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-2xl sm:text-3xl w-6 sm:w-12 -mt-4 sm:-mt-5 -mr-2 sm:-mr-5 flex-shrink-0">
                  V
                </span>
                <span className="font-light text-[10px] sm:text-xs w-16 sm:w-28 tracking-widest text-left flex-shrink-0">
                  IGILANT
                </span>
                <span className="text-gray-600 text-xs sm:text-lg font-light ml-2 sm:ml-4 flex-1">
                  Maintain constant attention to detail through active
                  supervision, quality control, and proactive risk management.
                </span>
              </div>
              <div className="flex items-start sm:items-center">
                <span className="font-semibold text-2xl sm:text-3xl w-6 sm:w-12 -mt-4 sm:-mt-5 -mr-2 sm:-mr-5 flex-shrink-0">
                  E
                </span>
                <span className="font-light text-[10px] sm:text-xs w-16 sm:w-28 tracking-widest text-left flex-shrink-0">
                  FFICIENT
                </span>
                <span className="text-gray-600 text-xs sm:text-lg font-light ml-2 sm:ml-4 flex-1">
                  Work with clarity and discipline through smart procedures, and
                  controlled execution.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom: Portfolio */}
      <div className="w-full mt-8 sm:mt-8 mt-6 px-4 md:px-12">
        <div className="text-xl sm:text-xl text-lg font-semibold tracking-wide border-b border-gray-300 pb-4 mb-4">
          PORTFOLIO
        </div>
        <div className="text-xl sm:text-xl text-base text-gray-600 flex items-center gap-2">
          Portfolio 2025 <IoMdArrowRoundDown className="text-black" />
        </div>
      </div>
    </div>
  );
}

export default Mission;
