import React from "react";

function DesignWithHuman() {
  return (
    <div className="w-full min-h-screen bg-white font-inter box-border p-4 md:p-0 m-0 -mt-16 md:-mt-32 overflow-hidden">
      {/* Top Section: Title and Description */}
      <div className="pt-8 px-4 md:px-12 bg-white max-w-7xl mx-auto">
        <div className="text-[48px] md:text-[90px] font-semibold text-[#222] leading-[1.05] font-inter mb-0">
          Design with
        </div>
        <div className="text-[48px] md:text-[90px] font-semibold text-[#222] leading-[1.05] font-inter mt-[-12px] md:mt-[-18px] mb-0">
          <span className="italic">Human.</span>
        </div>
        <div className="text-[10px] md:text-[11px] text-[#222] font-normal leading-[1.2] mt-[18px] max-w-full md:max-w-[700px] tracking-[0.1px]">
          AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET
          SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION
          VENIAM CONSEQUAT SUNT NOSTRUD AMET.AMET MINIM MOLLIT NON DESERUNT
          ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. AMET.
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full mt-8 overflow-hidden">
        <img
          src="/designwith.png"
          alt="city skyline"
          className="w-full h-[200px] md:h-[350px] object-cover block m-0 p-0 rounded-none shadow-none"
        />
      </div>
    </div>
  );
}

export default DesignWithHuman;
