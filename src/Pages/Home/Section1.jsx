import React from "react";

function Section1() {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen md:h-screen flex flex-col md:flex-row px-4 md:px-8 overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-1/2 pl-4 md:pl-8 pt-8 flex flex-col">
        {/* Real Estate Button */}
        <div className="w-full max-w-[220px] h-[48px] flex items-center justify-center bg-gray-500 rounded-full text-white text-base md:text-lg font-semibold mb-6">
          REAL ESTATE
        </div>
        {/* 01/07 */}
        {/* <div className="text-sm mb-2">01/07</div> */}
        {/* Description */}
        <div className="text-sm md:text-base text-black">
          REALTA{" "}
          <span className="font-bold underline">BUILDS AND DEVELOPS</span>{" "}
          BUILDINGS TO MANY PLACES AROUND THE WORLD, WITH A VARIETY OF SERVICES
          PROVIDED
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-between pr-4 md:pr-8 pt-8 pb-8">
        {/* Paragraph */}
        <div
          className="text-xs md:text-sm text-black font-normal leading-tight text-justify"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET
          SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION
          VENIAM CONSEQUAT SUNT NOSTRUD AMET.AMET MINIM MOLLIT NON DESERUNT
          ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT
          DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD
          AMET.AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO
          AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT.
          EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.AMET MINIM MOLLIT NON
          DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA
          CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT
          NOSTRUD AMET.AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA
          DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT.
          EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.AMET MINIM MOLLIT NON
          DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA
          CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT
          NOSTRUD AMET.AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA
          DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT.
          EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.
          {/* Image */}
          <div className="w-full flex justify-center items-end mt-10">
            <img
              src="/section1.png"
              alt="architecture"
              className=" object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
