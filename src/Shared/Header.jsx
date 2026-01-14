import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Profile from "../Pages/Authentication/Profile";
import PasswordChangeModal from "../Pages/Authentication/PasswordChangeModal";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for user data in localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleSignOut = () => {
    // Clear all localStorage
    localStorage.clear();
    setUser(null);
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate("/signin");
  };

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
            {user ? (
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-gray-700 hover:text-[#d94a6c] transition-colors font-semibold flex items-center gap-1"
                  type="button"
                >
                  {user.profile?.name || user.email}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {/* <button
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsProfileOpen(true);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      type="button"
                    >
                      Profile
                    </button> */}
                    {/* <button
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsPasswordModalOpen(true);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      type="button"
                    >
                      Change Password
                    </button> */}
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      type="button"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d94a6c] font-semibold"
                      : "text-gray-700 hover:text-[#d94a6c] transition-colors"
                  }
                >
                  PREMIUM ACCESS
                </NavLink>
              </li>
            )}
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
            {user ? (
              <>
                <li className="border-t pt-2 mt-2">
                  <div className="text-gray-900 font-semibold mb-2">
                    {user.profile?.name || user.email}
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleNavClick();
                      setIsProfileOpen(true);
                    }}
                    className="text-gray-700 hover:text-[#d94a6c] transition-colors w-full text-left"
                    type="button"
                  >
                    PROFILE
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleNavClick();
                      setIsPasswordModalOpen(true);
                    }}
                    className="text-gray-700 hover:text-[#d94a6c] transition-colors w-full text-left"
                    type="button"
                  >
                    CHANGE PASSWORD
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-red-600 hover:text-red-700 transition-colors w-full text-left"
                    type="button"
                  >
                    SIGN OUT
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/signin"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d94a6c] font-semibold"
                      : "text-gray-700 hover:text-[#d94a6c] transition-colors"
                  }
                >
                  SIGN IN
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Profile Modal */}
      <Profile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      {/* Password Change Modal */}
      <PasswordChangeModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </header>
  );
}

export default Header;
