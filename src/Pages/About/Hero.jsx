import React from "react";

function Hero() {
  return (
    <div className="w-full bg-white text-gray-800 mt-20">
      {/* Top: About Us section */}
      <div className="max-w-full mx-auto px-4 md:px-0 pt-8 pb-2">
        <div className="text-3xl font-semibold mb-6 mx-6">ABOUT US</div>
        <div className="flex flex-col md:flex-row gap-24 mx-6">
          {/* Left: Main text */}
          <div className="flex-1 min-w-0">
            <div className="text-gray-700 text-xl font-light mb-4 max-w-5xl">
              WBP Interiors is a next-generation design and build company,
              established by industry professionals with extensive experience
              and a proven record in delivering complex commercial, residential,
              hospitality and mixed use interiors across the UAE.
            </div>
            <div className="text-black text-xl font-bold mb-4 max-w-5xl">
              We build on over two decades of industry experience, continuing a
              legacy of design and build excellence that has shaped many
              industry recognized interiors; now through a refined, agile, and
              collaborative structure.
            </div>
            <div className="text-gray-700 text-xl font-light mb-4 max-w-5xl">
              Our approach redefines the conventional design–build model by
              merging the creativity of specialized design studios with the
              operational discipline of an experienced delivery team.
            </div>
            <div className="text-gray-700 text-xl font-light max-w-5xl">
              WBP Interiors, design is developed through partnerships with
              top-tier boutique design studios, while fit-out delivery is
              managed directly through our in-house contractor management team
              and a network of specialized partners. This hybrid structure
              ensures creative freedom, cost efficiency, and uncompromising
              quality across all project stages.
            </div>
          </div>
          {/* Right: Gray box */}
          <div className="flex-1 min-w-0 flex md:justify-start ">
            <div className="bg-[#777472] text-white text-xl font-light  p-16 max-w-2xl w-full md:w-[640px] max-h-[400px] flex items-center">
              Our approach is built on structure, clarity, and accountability.
              Every project is executed with a methodical mindset, supported by
              strong leadership, strategic planning, and rigorous quality
              control. We do not simply build interiors, we transform ideas into
              environments that reflect your identity and inspire your
              experience.
            </div>
          </div>
        </div>
      </div>
      {/* Bottom: Full-width image */}
      <div className="w-full mt-10">
        <img
          src="/abouthero.png"
          alt="About Us Hero"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
