import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { FaChevronDown } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../utils/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = use(AuthContext);
  console.log(user);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/find-job", label: "Find a Job" },
    { to: "/recruiters", label: "Recruiters" },
    { to: "/candidates", label: "Candidates" },
    { to: "/pages", label: "Pages" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="font-plus shadow-lg py-3 relative z-50">
      <nav className="flex justify-between container mx-auto items-center px-4">
        {/* Logo */}
        <div>
          <img
            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/jobhub-logo.svg"
            alt="JobHub Logo"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex justify-center gap-4 items-center">
          {navItems.map((item) => (
            <li key={item.to} className="relative group">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 transition ${
                    isActive
                      ? "text-blue-700 border-b border-blue-700"
                      : "text-gray-700"
                  }`
                }
              >
                {item.label} <FaChevronDown />
              </NavLink>
              {/* Dropdown (static demo) */}
              <ul className="absolute top-full left-0 bg-white shadow-md py-2 px-4 rounded hidden group-hover:block min-w-[150px]">
                <li className="py-1 hover:text-blue-600 cursor-pointer">
                  Submenu 1
                </li>
                <li className="py-1 hover:text-blue-600 cursor-pointer">
                  Submenu 2
                </li>
              </ul>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        {user ? (
          <button>Logout</button>
        ) : (
          <div className="hidden lg:flex items-center gap-x-2.5">
            <NavLink to="/register" className="hover:underline">
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="bg-blue-600 text-white hover:bg-blue-950 py-2 px-4 rounded-[5px] transition-all duration-300 hover:-translate-y-0.5"
            >
              Sign in
            </NavLink>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden cursor-pointer text-[24px]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <CiMenuFries />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl"
              >
                <IoMdClose />
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 ${
                        isActive
                          ? "text-blue-700 font-semibold"
                          : "text-gray-800"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/register" className="text-gray-800">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="bg-blue-600 text-white py-2 px-4 rounded block text-center mt-2"
                >
                  Sign in
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
