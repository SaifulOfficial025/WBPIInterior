import React, { useState } from "react";
import CustomIndicator from "../Shared/CustomIndicator";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Hero({
  category = "COMMERCIAL",
  projectTitle = "Property Finder",
  headerData = {
    client: "Project Finder",
    design: "WBP Interiors (Under Swiss Bureau Interior Design)",
    fitOut: "WBP Interiors (Under Swiss Bureau Interior Design)",
    contact: "Contact",
  },
  imageSrc = "/PropertyFinder.png",
  description = "Property Finder is a leading real estate online marketplace operating in the Middle East and North African countries.",
  projectNo = "24061",
  project = "Project: Refurbishment of Collaboration Space and Boardroom and meeting rooms.",
  address = "15th floor, Shatha Tower, Media City, Dubai UAE",
  timeframe = "Design 4 weeks, Fit-Out 8 weeks",
  areaType = "Collaboration",
  featuring = "Mix Used",
  area = "247 m²",
  currentPage = 3,
  totalPages = 5,
  onPrevPage = () => {},
  onNextPage = () => {},
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full">
      {/* Project Header Section */}
      <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {/* Top row: arrows */}
            <div className="flex justify-between items-start">
              <button className="text-gray-600 hover:text-gray-900">
                <FaArrowLeft className="w-5 h-5 mb-3 text-black" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <FaArrowRight className="w-5 h-5 mb-3 text-black" />
              </button>
            </div>

            {/* Second row: full-width three columns (Category / Table / Contact) */}
            <div className="-mx-4 sm:-mx-6 lg:-mx-8">
              <div className="grid grid-cols-3 items-center gap-6">
                <div className="flex flex-col items-start pl-4 sm:pl-6 lg:pl-8">
                  <p className="text-md sm:text-md text-black uppercase tracking-wide mb-1 font-bold">
                    {category}
                  </p>
                  <p className="text-md text-gray-400">Category</p>
                </div>

                <div className="flex justify-center">
                  <table className="w-full text-md sm:text-md max-w-md">
                    <tbody>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-gray-900">
                          Client
                        </td>
                        <td className="py-3 text-gray-700">
                          {headerData.client}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-gray-900">
                          Design
                        </td>
                        <td className="py-3 text-gray-700">
                          {headerData.design}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-gray-900">
                          Fit-Out
                        </td>
                        <td className="py-3 text-gray-700">
                          {headerData.fitOut}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col items-end pr-4 sm:pr-6 lg:pr-8">
                  <p className="text-md font-bold text-gray-900">CONTACT</p>
                  <p className="text-md text-gray-700">{headerData.contact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image */}
          <div className="flex items-center justify-center bg-gray-100 overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <img
              src={imageSrc}
              alt={projectTitle}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-between">
            {/* Top Section */}
            <div>
              <p className="text-md sm:text-md text-gray-500 uppercase tracking-wide mb-2">
                {category}
              </p>
              <h2 className="text-6xl sm:text-6xl font-light text-gray-900 mb-4">
                {projectTitle}
              </h2>
              <p className="text-md sm:text-md text-black font-semibold leading-relaxed mb-8">
                {description}
              </p>

              {/* Details Grid: two-column left-aligned rows */}
              <div className="space-y-5">
                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                  <p className="text-md text-black font-semibold uppercase tracking-wide">
                    Project No:
                  </p>
                  <p className="text-md sm:text-md text-gray-900">
                    {projectNo}
                  </p>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                  <p className="text-md text-black font-semibold uppercase tracking-wide">
                    Project:
                  </p>
                  <p className="text-md sm:text-md text-gray-900">{project}</p>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                  <p className="text-md text-black font-semibold uppercase tracking-wide">
                    Address:
                  </p>
                  <p className="text-md sm:text-md text-gray-900">{address}</p>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                  <p className="text-md text-black font-semibold uppercase tracking-wide">
                    Timeframe:
                  </p>
                  <p className="text-md sm:text-md text-gray-900">
                    {timeframe}
                  </p>
                </div>
              </div>

              {/* Bottom Grid — full width */}
              <div className="-mx-4 sm:-mx-6 lg:-mx-8 mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <div className="pl-4 sm:pl-6 lg:pl-8">
                    <p className="text-md text-gray-500 tracking-wide mb-2">
                      Area Type
                    </p>
                    <p className="text-xl sm:text-md font-medium text-gray-900">
                      {areaType}
                    </p>
                  </div>

                  <div className="px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-md text-gray-500 tracking-wide mb-2">
                      Featuring
                    </p>
                    <p className="text-xl sm:text-md font-medium text-gray-900">
                      {featuring}
                    </p>
                  </div>

                  <div className="pr-4 sm:pr-6 lg:pr-8 text-right">
                    <p className="text-md text-gray-500 tracking-wide mb-2">
                      Area
                    </p>
                    <p className="text-xl sm:text-md font-medium text-gray-900">
                      {area}
                    </p>
                  </div>
                </div>
              </div>
              {/* Bottom: CustomIndicator */}
              <div className="mt-24 pt-6 ">
                <CustomIndicator
                  current={currentPage}
                  total={totalPages}
                  onPrev={onPrevPage}
                  onNext={onNextPage}
                  className="justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
