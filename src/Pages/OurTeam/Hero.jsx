import React from "react";
import TextToggle from "../../Shared/TextToggle";
import { useState } from "react";
import Divider from "../../Shared/Divider";

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="overflow-hidden mt-20">
      <div className="text-3xl font-semibold mb-6 mx-6">OUR TEAM</div>

      <div className="flex flex-col md:flex-row w-full h-[940px]">
        {/* Left: Single image with both people, names, and info */}
        <div className="w-full md:w-1/2 h-[940px] flex items-stretch">
          <img
            src="/teamleftsideimage.png"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Founders text and toggle */}
        <aside className="w-full md:w-1/2 h-[840px] flex flex-col justify-center px-8 py-8 ">
          <div className="w-[600px] h-[840px] bg-cover mb-6 hidden md:block ml-52">
            <img
              src="/teamrightsideimage.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 text-black">
            <h3 className="text-xl font-semibold">Founders</h3>
            <p className="mt-3 text-md leading-relaxed">
              WBP Interiors is founded and led by a team driven by precision,
              creativity, and accountability. We bring together strategy,
              technical design expertise, and market insight to ensure every
              space is carefully designed and carefully delivered.
            </p>
          </div>
          <div className="my-3">
            <Divider />
          </div>
          <TextToggle
            heading="EXPLORE EXPERIENCE"
            text="Our team brings together design expertise, technical knowledge, and project delivery discipline to create spaces that perform, inspire and endure."
          />
        </aside>
      </div>
    </section>
  );
}

export default Hero;
