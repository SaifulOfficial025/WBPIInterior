import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { to: "/", label: "HOME" },
    { to: "/team", label: "OUR TEAM" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/services", label: "SERVICES" },
    { to: "/contact", label: "CONTACT" },
    { to: "/about", label: "ABOUT US" },
    { to: "/live", label: "LIVE" },
  ];

  return (
    <header className="w-full bg-transparent shadow-none">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="inline-block">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        <nav>
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
