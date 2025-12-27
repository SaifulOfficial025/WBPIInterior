import React from "react";
import { FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

function Hero() {
  return (
    <>
      {/* Sticky Hero Image */}
      <div className="w-full bg-transparent sticky top-0 -z-10 h-screen flex flex-col">
        <div className="pt-4 pl-4 sm:pt-4 pt-2 sm:pl-4 pl-2 text-xl md:text-2xl font-semibold">
          <h2 className="text-2xl sm:text-2xl text-xl ml-2 sm:ml-2 ml-1 font-bold tracking-widest">
            CONTACT
          </h2>
        </div>
        <div className="w-full flex-1 flex justify-center items-center">
          <img
            src="/contacthero.png"
            alt="Contact Hero"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
      {/* Scrolling Content */}
      <div className="relative z-10 bg-white -mt-64 sm:-mt-64 -mt-32 pt-4 sm:pt-4 pt-2">
        {/* Info Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end px-4 md:px-12 sm:mt-6 mt-4 mb-2 gap-4 sm:gap-4 gap-2">
          {/* Social Icons */}
          <div className="flex flex-row gap-4 sm:gap-4 gap-3 text-xl sm:text-xl text-lg md:text-2xl mb-2 md:mb-0">
            <FaTwitter />
            <FaFacebook />
            <FaWhatsapp />
            <FaInstagram />
            <GrYoutube />
            <FaLinkedinIn />
          </div>
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 sm:gap-8 gap-4 text-md sm:text-md text-sm md:text-md w-full md:w-auto justify-end">
            <div className="flex flex-col gap-2 min-w-[220px] sm:min-w-[220px] min-w-0">
              <div className="flex items-start gap-2">
                <IoLocationSharp className="mt-0.5" />
                102 Office, Building 6, Bay Square, Business Bay, Dubai, UAE
                <br />
                PO.Box 111581
              </div>
              <div className="flex items-center gap-2 sm:gap-2 gap-1">
                <MdEmail className="flex-shrink-0" />
                info@wbpi.com
              </div>
              <div className="flex items-center gap-2 sm:gap-2 gap-1">
                <FaGlobe className="flex-shrink-0" />
                www.wbpi.com
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[140px] min-w-0">
              <div className="flex items-center gap-2 sm:gap-2 gap-1">
                <FaPhone className="flex-shrink-0" />
                +971 4 122 22 45
              </div>
              <div className="flex items-center gap-2 sm:gap-2 gap-1">
                <AiFillMessage className="flex-shrink-0" />
                +971 54 790 76 36
              </div>
            </div>
          </div>
        </div>
        {/* Ask for Proposal */}
        <div className="w-full flex flex-col items-center mt-16 sm:mt-16 mt-8 mb-4 sm:mb-4 mb-2">
          <div className="text-lg sm:text-lg text-base font-semibold tracking-wide mb-2">
            ASK FOR PROPOSAL
          </div>
          <img
            src="/threeline.png"
            alt="Three Lines"
            className="h-6 sm:h-6 h-4 w-auto"
          />
        </div>
        {/* Bottom Pattern */}
        <div className="w-full flex justify-center items-center">
          <img
            src="/options.png"
            alt="Pattern"
            className="w-full max-w-9xl object-cover max-h-16 sm:max-h-16 max-h-12"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
