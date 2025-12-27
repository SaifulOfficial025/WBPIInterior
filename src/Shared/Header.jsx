import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "HOME" },
    { to: "/team", label: "OUR TEAM" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/services", label: "SERVICES" },
    { to: "/contact", label: "CONTACT" },
    { to: "/about", label: "ABOUT US" },
    { to: "/live", label: "LIVE" },
  ];

  // Hamburger button for mobile
  const Hamburger = (
    <button
      className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
      aria-label="Open menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen((open) => !open)}
      type="button"
    >
      <span
        className={`block h-0.5 w-6 bg-black my-0.5 transition-all duration-300 ${
          menuOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-black my-0.5 transition-all duration-300 ${
          menuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-black my-0.5 transition-all duration-300 ${
          menuOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
  );

  // Close menu on navigation (mobile only)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="w-full bg-transparent shadow-none fixed top-0 left-0 z-50 backdrop-blur-xl">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-2 md:items-center items-start">
        <div className="flex items-center w-full md:w-auto justify-between">
          <a href="/" className="inline-block">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto sm:h-10 h-8"
            />
          </a>
          {Hamburger}
        </div>

        <nav className="w-full md:w-auto">
          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d94a6c] font-semibold"
                      : "text-gray-700 hover:text-[#d94a6c] transition-colors"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Mobile menu */}
          <ul
            className={`md:hidden flex-col gap-2 font-sans text-xs tracking-widest w-full mt-2 bg-white rounded shadow-lg transition-all duration-300 origin-top z-50 p-4
              ${menuOpen ? "flex" : "hidden"}`}
          >
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d94a6c] font-semibold"
                      : "text-gray-700 hover:text-[#d94a6c] transition-colors"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
