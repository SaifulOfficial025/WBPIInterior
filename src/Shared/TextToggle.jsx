import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function TextToggle({ heading = "EXPLORE EXPERIENCE", text = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="flex items-center justify-between w-full font-semibold text-black "
      >
        <span className="text-2xl">{heading}</span>
        <FaArrowRight
          className={`w-5 h-5 transition-transform duration-800 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        className={`text-md text-black overflow-hidden transition-all duration-800 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextToggle;
