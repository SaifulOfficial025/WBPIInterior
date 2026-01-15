import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#110F0E] text-[#E5E5E5] py-8 md:py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section */}
        <div className="flex-1 min-w-full md:min-w-[320px]">
          {/* Logo */}
          <div className="mb-2">
            <span className="text-2xl font-bold tracking-widest bg-white p-2  inline-block">
              <img src="/logo.png" alt="WBP Interiors Logo" />
            </span>
          </div>
          {/* Subscribe Text */}
          {/* <div className="mb-3 text-[15px]">
            Subscribe today to receive all our update and news
          </div> */}
          {/* Email Input */}
          {/* <form className="mb-4">
            <div className="flex items-center w-full max-w-[420px] bg-transparent rounded-full border border-[#333] px-3 py-1.5">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent outline-none border-none text-[#E5E5E5] placeholder-[#888] text-[15px] px-2 py-1"
              />
              <button
                type="submit"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F43F5E] hover:bg-[#e11d48] transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </form> */}
          {/* Social Icons */}
          <div className="flex flex-row gap-4 mt-2">
            <FaWhatsapp className="w-6 h-6 cursor-pointer hover:text-[#F43F5E] transition-colors" />
            <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-[#F43F5E] transition-colors" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-[#F43F5E] transition-colors" />
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-px h-[140px] bg-[#23201F] mx-8"></div>
        {/* Company */}
        <div className="min-w-[180px]">
          <div className="font-semibold text-lg mb-2 text-white">Company</div>
          <ul className="space-y-2 text-[15px]">
            <li>
              <Link
                to="/team"
                className="hover:text-[#F43F5E] transition-colors"
              >
                OUR TEAM
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-[#F43F5E] transition-colors"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#F43F5E] transition-colors"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#F43F5E] transition-colors"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-px h-[140px] bg-[#23201F] mx-8"></div>
        {/* Services */}
        {/* <div className="min-w-[180px]">
          <div className="font-semibold text-lg mb-2 text-white">Services</div>
          <ul className="space-y-2 text-[15px]">
            <li>
              <a href="#" className="hover:text-[#F43F5E] transition-colors">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F43F5E] transition-colors">
                Content Writing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F43F5E] transition-colors">
                SEO for Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F43F5E] transition-colors">
                UI Design
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
