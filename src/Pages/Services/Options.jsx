import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const options = [
  [
    {
      title: "FIT-OUT WORKS",
      desc: "CONTRACTOR MANAGEMENT, PROCUREMENT, REPORTING ...",
      type: "IN-HOUSE",
      comingSoon: false,
      partner: false,
      independent: false,
    },
    {
      title: "TECHNICAL DRAFTING & VISUALIZATIONS",
      desc: "DEVELOPMENT OF CONSTRUCTION DOCUMENTATION & DETAIL BLUEPRINTS.",
      type: "COMING SOON",
      comingSoon: true,
      partner: false,
      independent: false,
    },
  ],
  [
    {
      title: "MATTERPORT SCAN",
      desc: "VERIFICATION OF BUILD EXECUTION & SITE PROGRESS REPORTING.",
      type: "IN-HOUSE",
      comingSoon: false,
      partner: false,
      independent: false,
    },
    {
      title: "OUR PARTNERS SERVICES",
      desc: "DESIGN, REAL SPECIFIC FIT-OUT SERVICES.",
      type: "PARTNERSHIP",
      comingSoon: false,
      partner: true,
      independent: false,
    },
  ],
  [
    {
      title: "ENLAPS",
      desc: "TIMELAPSE/PHOTOS/ARISE | CAPTURE DEVELOPMENT OF YOUR VISION.",
      type: "IN-HOUSE",
      comingSoon: false,
      partner: false,
      independent: false,
    },
    {
      title: "3RD PARTY SERVICES",
      desc: "INDEPENDENT PROJECT MANAGEMENT & COST CONTROL.",
      type: "INDEPENDENT",
      comingSoon: false,
      partner: false,
      independent: true,
    },
  ],
];

function Options() {
  return (
    <div className="w-full bg-white pb-8 mt-16">
      <div className="max-w-full mx-auto px-2 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 divide-y md:divide-y-0 md:divide-x">
          {/* Left and Right Columns */}
          {options[0].map((_, colIdx) => (
            <div key={colIdx} className="flex flex-col divide-y">
              {options.map((row, rowIdx) => {
                const opt = row[colIdx];
                return (
                  <div
                    key={opt.title}
                    className="flex items-center justify-between py-3 group hover:bg-gray-50 transition"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-md md:text-md tracking-wide text-gray-900">
                          {opt.title}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-xs md:max-w-md mt-2">
                        {opt.desc}
                      </div>
                    </div>
                    <div className="flex flex-col items-end ml-2 min-w-[70px]">
                      <FaArrowRightLong className="text-black text-md mt-1 group-hover:text-black transition mb-2" />
                      <span
                        className={
                          "text-[10px] md:text-sm  " +
                          (opt.type === "COMING SOON"
                            ? "text-red-500"
                            : opt.partner
                            ? "text-gray-400"
                            : opt.independent
                            ? "text-gray-400"
                            : "text-gray-400")
                        }
                      >
                        {opt.type}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom design pattern */}
      <div className="w-full mt-6">
        <img
          src="/options.png"
          alt="Options Pattern"
          className="w-full object-cover max-h-full "
        />
      </div>
    </div>
  );
}

export default Options;
