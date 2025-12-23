import React, { useState } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

function ContractType() {
  // Collapsible state for the second section
  const [openBookOpen, setOpenBookOpen] = useState(true);
  const [preContractOpen, setPreContractOpen] = useState(true);
  const [traditionalOpen, setTraditionalOpen] = useState(true);

  return (
    <div className="w-full bg-white text-gray-800  py-10 space-y-16">
      {/* Section 1: Title, paragraphs, and image */}
      <div className="max-w-full mx-auto">
        <div className="text-xl md:text-2xl font-normal mb-8 ml-16">
          CONTRACT TYPES
        </div>
        <div className="text-gray-700 text-base md:text-xl font-light mb-6 max-w-5xl ml-16">
          We offer three structured contract models to suit different project
          requirements, client involvement levels, and delivery priorities. Each
          model is aligned with FIDIC-based contracting principles and industry
          best practice.
        </div>
        <div className="text-gray-700 text-base md:text-xl font-light mb-10 max-w-5xl ml-16">
          Selection of the most suitable model depends on the client’s internal
          resources, time availability, and desired level of cost transparency.
        </div>
        <div className="text-gray-700 text-base md:text-xl font-light mb-6 max-w-5xl ml-16">
          We offer three structured contract models to suit different project
          requirements, client involvement levels, and delivery priorities. Each
          model is aligned with FIDIC-based contracting principles and industry
          best practice.
        </div>
        <div className="text-gray-700 text-base md:text-xl font-light mb-10 max-w-5xl ml-16">
          Selection of the most suitable model depends on the client’s internal
          resources, time availability, and desired level of cost transparency.
        </div>
        <div className="w-full mt-8">
          <img
            src="/contracttype1.png"
            alt="Contract Types Writing"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Section 2: Collapsible contract types and image */}
      <div className="max-w-full mx-16 flex flex-col md:flex-row  items-start">
        {/* Left: Collapsible contract types */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          {/* Traditional Contract */}
          <div className="border-b">
            <button
              className="w-full text-left py-3 px-2 font-medium flex items-center justify-between"
              disabled
            >
              TRADITIONAL CONTRACT (LUMP SUM – CLOSED BOOK)
              <span>
                <IoMdArrowRoundDown />
              </span>
            </button>
          </div>
          {/* Open Book Contract Models */}
          <div className="border-b">
            <button
              className="w-full text-left py-3 px-2 font-medium flex items-center justify-between"
              onClick={() => setOpenBookOpen((v) => !v)}
            >
              OPEN BOOK CONTRACT MODELS
              <span>
                {openBookOpen ? <IoMdArrowRoundDown /> : <IoMdArrowUp />}
              </span>
            </button>
            {openBookOpen && (
              <div className="pl-6 border-l ml-2">
                {/* Pre-Contract Open Book */}
                <div className="border-b">
                  <button
                    className="w-full text-left py-3 px-2 font-normal flex items-center justify-between"
                    onClick={() => setPreContractOpen((v) => !v)}
                  >
                    PRE-CONTRACT OPEN BOOK
                    <span>
                      {preContractOpen ? (
                        <IoMdArrowRoundDown />
                      ) : (
                        <IoMdArrowUp />
                      )}
                    </span>
                  </button>
                </div>
                {/* Traditional Open Book */}
                <div className="border-b">
                  <button
                    className="w-full text-left py-3 px-2 font-normal flex items-center justify-between"
                    onClick={() => setTraditionalOpen((v) => !v)}
                  >
                    TRADITIONAL OPEN BOOK
                    <span>
                      {traditionalOpen ? (
                        <IoMdArrowRoundDown />
                      ) : (
                        <IoMdArrowUp />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Red link */}
          <div className="mt-8 flex justify-end">
            <button className="text-[#E31E24] text-sm font-medium flex items-center gap-2 group hover:underline transition-all mt-44">
              SELECTING THE RIGHT CONTRACT MODEL
              <span className="ml-1 group-hover:translate-x-1 transition-transform">
                <IoMdArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <img
            src="/contracttype2.png"
            alt="Contract Types Contract"
            className=" object-cover w-full max-w-[400px] md:max-w-[420px] lg:max-w-[480px] h-auto "
          />
        </div>
      </div>
      {/* Bottom note */}
      <div className="max-w-full mx-16 text-md font-semibold text-black mt-8 border-b border-gray-300 ">
        MATTERPORT | VERIFICATION OF AS-BUILD DOCUMENTATION &amp; SITE PROGRESS
        REPORTING.
      </div>
    </div>
  );
}

export default ContractType;
