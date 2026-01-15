import React from "react";

function WeBuild() {
  return (
    <div className="w-full min-h-screen bg-white font-inter box-border p-4 md:p-0 m-0 -mt-16 md:-mt-32 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-7xl mx-auto mt-8 gap-6 md:gap-0 px-4 md:px-8">
        {/* Image */}
        <div className="w-full md:w-[300px] h-[250px] md:h-[340px] md:mr-12 md:ml-3 flex-shrink-0">
          <img
            src="/webuild.png"
            alt="building"
            className="w-full h-full object-cover rounded-none shadow-none"
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-start justify-start mt-3 max-w-full md:max-w-[900px] px-2 md:px-0">
          {/* <div className="text-[16px] text-[#222] mb-2 font-inter">02/07</div> */}
          <div className="text-[32px] md:text-[60px] font-normal text-[#222] leading-[1.05] mb-6 tracking-normal font-inter max-w-full md:max-w-[900px]">
            WE BUILD SUCH A<br />
            STRUCTURE TO BE STRONG
            <br />
            IN THE FUTURE.
          </div>
          <div className="text-[16px] text-[#222] font-medium leading-[1.2] mb-6 max-w-[900px]">
            AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET
            SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION
            VENIAM CONSEQUAT SUNT NOSTRUD AMET.AMET MINIM MOLLIT NON DESERUNT
            ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. AMET.
          </div>
          {/* Learn More Button */}
          {/* <button className="px-8 py-3 border-[1.5px] border-[#222] rounded-full bg-white text-[#222] text-[16px] font-medium cursor-pointer outline-none flex items-center gap-3 mt-0">
            LEARN MORE
            <span className="inline-block text-[20px] ml-1">&rarr;</span>
          </button> */}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end w-full max-w-7xl mx-auto mt-12 md:mt-20 gap-8 md:gap-20 px-4">
        {/* Stat 1 */}
        <div className="text-center">
          <div className="text-[48px] md:text-[80px] font-normal text-[#222] leading-[1]">
            2491+
          </div>
          <div className="text-[20px] text-[#222] mt-2 tracking-wide">
            PROJECT COMPLETE
          </div>
        </div>
        {/* Stat 2 */}
        <div className="text-center">
          <div className="text-[80px] font-normal text-[#222] leading-[1]">
            723+
          </div>
          <div className="text-[20px] text-[#222] mt-2 tracking-wide">
            WORLD CLIENT
          </div>
        </div>
        {/* Stat 3 */}
        <div className="text-center">
          <div className="text-[80px] font-normal text-[#222] leading-[1]">
            589+
          </div>
          <div className="text-[20px] text-[#222] mt-2 tracking-wide">
            CLIENT HAPPINESS
          </div>
        </div>
        {/* Stat 4 */}
        <div className="text-center">
          <div className="text-[80px] font-normal text-[#222] leading-[1]">
            623+
          </div>
          <div className="text-[20px] text-[#222] mt-2 tracking-wide">
            PROJECT COMPLETE
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeBuild;
