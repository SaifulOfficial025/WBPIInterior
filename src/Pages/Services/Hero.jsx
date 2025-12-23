import React from "react";

function Hero() {
  return (
    <div className="w-full bg-white">
      <div className="pt-4 pl-4 text-lg font-semibold tracking-wide">
        <h2 className="text-2xl ml-2 font-bold tracking-widest ">SERVICES</h2>
      </div>
      <div className="w-full mt-2">
        <img
          src="/serviceshero.png"
          alt="Services Hero"
          className="w-full object-cover max-h-[600px] min-h-[200px]"
          style={{ objectPosition: "center" }}
        />
      </div>
    </div>
  );
}

export default Hero;
