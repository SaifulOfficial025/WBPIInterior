import React from "react";

function ChooseRealEstate() {
  return (
    <div className="w-full min-h-screen bg-white font-inter box-border p-4 md:p-0 m-0 -mt-32 md:-mt-64 overflow-hidden">
      {/* Title */}
      <div className="pt-8 px-4 md:px-12 bg-white max-w-7xl mx-auto">
        <div className="text-[48px] md:text-[90px] font-semibold text-[#222] leading-[1.05] font-inter mb-0">
          Choose
        </div>
        <div className="text-[48px] md:text-[90px] font-semibold text-[#222] leading-[1.05] font-inter mt-[-12px] md:mt-[-18px] mb-0">
          an <span className="italic">Real Estate</span>
        </div>
      </div>
      {/* Images Row */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end w-full max-w-7xl mx-auto mt-8 gap-4 md:gap-8 px-4">
        {/* Image 1 */}
        <div className=" overflow-hidden rounded-none">
          <img
            src="/choose.png"
            alt="real estate 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Description */}
      <div className="text-[11px] md:text-[12px] text-[#222] font-normal leading-[1.2] mt-[18px] max-w-full md:max-w-[1200px] tracking-[0.1px] mx-auto text-left px-4 md:px-0">
        AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET
        SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION
        VENIAM CONSEQUAT SUNT NOSTRUD AMET.AMET MINIM MOLLIT NON DESERUNT
        ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS
        ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.AMET
        MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT.
      </div>
      {/* Learn More Button */}
      <div className="ml-4 md:ml-12 mt-[18px]">
        {/* <button className="px-7 py-2.5 border-[1.5px] border-[#222] rounded-full bg-white text-[#222] text-[15px] font-medium cursor-pointer outline-none flex items-center gap-2.5 mt-0">
          LEARN MORE
          <span className="inline-block text-[18px] ml-1">&rarr;</span>
        </button> */}
      </div>
    </div>
  );
}

export default ChooseRealEstate;
