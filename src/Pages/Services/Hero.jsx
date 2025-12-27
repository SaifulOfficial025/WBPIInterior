import React from "react";

function Hero() {
  return (
    <div className="w-full bg-transparent sticky top-0 -z-10 h-screen flex flex-col">
      <div className="pt-4 pl-4 text-lg font-semibold tracking-wide">
        <h2 className="text-2xl ml-2">SERVICES</h2>
      </div>
      <div className="w-full flex-1">
        <img
          src="/serviceshero.png"
          alt="Services Hero"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>
    </div>
  );
}

export default Hero;
