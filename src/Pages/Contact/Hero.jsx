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
        <div className="pt-4 pl-4 text-xl md:text-2xl font-semibold">
          <h2 className="text-2xl ml-2 font-bold tracking-widest">CONTACT</h2>
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
      <div className="relative z-10 bg-white -mt-64 pt-4">
        {/* Info Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end px-4 md:px-12 mt-6 mb-2 gap-4">
          {/* Social Icons */}
          <div className="flex flex-row gap-4 text-xl md:text-2xl mb-2 md:mb-0">
            <FaTwitter />
            <FaFacebook />
            <FaWhatsapp />
            <FaInstagram />
            <GrYoutube />
            <FaLinkedinIn />
          </div>
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 text-md md:text-md w-full md:w-auto justify-end">
            <div className="flex flex-col gap-2 min-w-[220px]">
              <div className="flex items-start gap-2">
                <IoLocationSharp className="mt-0.5" />
                102 Office, Building 6, Bay Square, Business Bay, Dubai, UAE
                <br />
                PO.Box 111581
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                info@wbpi.com
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe />
                www.wbpi.com
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px]">
              <div className="flex items-center gap-2">
                <FaPhone />
                +971 4 122 22 45
              </div>
              <div className="flex items-center gap-2">
                <AiFillMessage />
                +971 54 790 76 36
              </div>
            </div>
          </div>
        </div>
        {/* Ask for Proposal */}
        <div className="w-full flex flex-col items-center mt-16 mb-4">
          <div className="text-lg font-semibold tracking-wide mb-2">
            ASK FOR PROPOSAL
          </div>
          <img src="/threeline.png" alt="Three Lines" className="h-6 w-auto" />
        </div>
        {/* Bottom Pattern */}
        <div className="w-full flex justify-center items-center">
          <img
            src="/options.png"
            alt="Pattern"
            className="w-full max-w-9xl object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
