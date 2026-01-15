import React from "react";

function Whatever() {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen bg-white font-inter box-border p-4 md:p-8 m-0 flex flex-col md:flex-row items-start justify-start -mt-16 md:-mt-32 overflow-hidden">
      {/* Left Image */}
      <div className="w-full md:w-[320px] h-[250px] md:h-[370px] md:ml-6 mt-10 flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
          alt="glass buildings"
          className="w-full h-full object-cover rounded-none shadow-none"
        />
      </div>
      {/* Right Content */}
      <div className="flex flex-col items-start justify-start ml-0 md:ml-12 mt-6 md:mt-10 max-w-full md:max-w-[900px]">
        {/* <div className="text-[15px] text-[#222] mb-2 font-inter">03/07</div> */}
        <div className="text-[28px] md:text-[48px] font-semibold text-[#222] leading-[1.05] mb-6 tracking-normal font-inter max-w-full md:max-w-[700px]">
          WHATEVER WE DO, WE
          <br />
          DEVELOP FOR THE LONG
          <br />
          TERM.
        </div>
        <div className="text-[11px] md:text-[12px] text-[#222] font-normal leading-[1.2] mb-6 max-w-full md:max-w-[600px] tracking-[0.1px] uppercase">
          SPANNING THE WEST AND EAST COASTS, WE WORK ACROSS BOTH THE PRIVATE AND
          PUBLIC MARKETS. OUR UNIQUE STRUCTURE ALLOWS US TO COMBINE THE POWER OF
          A PERMANENT CAPITAL BASE WITH THE SCALE OF A BEST-IN-CLASS INVESTMENT
          FIRM.
        </div>
        {/* Learn More Button */}
        {/* <button className="px-7 py-2.5 border-[1.5px] border-[#222] rounded-full bg-white text-[#222] text-[15px] font-medium cursor-pointer outline-none flex items-center gap-2.5 mt-0">
          LEARN MORE
          <span className="inline-block text-[18px] ml-1">&rarr;</span>
        </button> */}
      </div>
    </div>
  );
}

export default Whatever;
