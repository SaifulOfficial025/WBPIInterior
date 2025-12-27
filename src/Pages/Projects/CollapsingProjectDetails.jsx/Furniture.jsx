import React, { useState } from "react";
import CustomIndicator from "../Shared/CustomIndicator";
import { MdArrowOutward } from "react-icons/md";

function Furniture() {
  const [current, setCurrent] = useState(1);
  const total = 3;

  const prev = () => setCurrent((c) => Math.max(1, c - 1));
  const next = () => setCurrent((c) => Math.min(total, c + 1));

  const cards = [
    { img: "/furniture1.png", title: "Boardroom Table" },
    { img: "/furniture2.png", title: "Area Type" },
    { img: "/furniture3.png", title: "Area Type" },
  ];

  return (
    <div className="w-full mt-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl font-light text-gray-800 py-8">
          Furniture, Fixtures, & Equipment
        </h1>

        {/* Row 2: menu (three-line + vertical menu items) */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="flex items-start gap-4">
            <img src="/threeline.png" alt="menu" className="w-6 h-6 mt-1" />
            <div className="text-sm text-gray-700">
              <div className="mb-1">Furniture</div>
              <div className="mb-1">Lighting</div>
              <div className="mb-1">Sanitary ware</div>
            </div>
          </div>
          <div></div>
          <div></div>

          {/* Row 3: photo cards */}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <div key={idx} className="bg-white">
              <div className="h-56 sm:h-64  flex items-center justify-center overflow-hidden ">
                <img
                  src={c.img}
                  alt={c.title}
                  className="max-h-full w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-400 mt-5">
                <div className="text-sm text-gray-700">{c.title}</div>
                <MdArrowOutward className="text-gray-600 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 4: details */}
        <div className="mt-6">
          {/* <img src="/threeline.png" alt="menu" className="w-6 h-6 mt-1 mb-3" /> */}
          <div className="flex items-start gap-3">
            <div>
              <div className="text-md text-gray-500 mt-1">
                OFF-01 - High rectangular meeting table, has a structure
                composed of two legs available in melamine & the tops can be in
                wood finish melamine
              </div>
              <div className="text-md text-gray-700 mt-3">
                <span className="font-semibold">Dimensions</span>: 25 MM thk.,
                3200 mm long, 1430 mm wide & 750 mm
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: indicator */}
        <div className="max-w-xl mt-16 items-center mx-auto ">
          <CustomIndicator
            current={current}
            total={total}
            onPrev={prev}
            onNext={next}
            className="justify-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Furniture;
