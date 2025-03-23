"use client";
import { Link } from "lucide-react";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-[#060608] text-white top-0 right-0 z-[9999] px-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5">
        {/* Logo Section */}
        <div logo="Logo">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div href="/" className="text-lg font-semibold">
              CRACX
            </div>
          </div>
        </div>

        {/* Desktop View Text */}
        <div className="hidden md:block">
          <p className="text-[#86868D]">
            Developer & Security analyst <br />
            based in <span className="text-white">India.</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold">
          <a href="#Case-Studies" className="hover:text-gray-400">
            Case Studies
          </a>
          <a href="#Experience" className="hover:text-gray-400">
            Experience
          </a>
          <a href="#Hire-Me" className="hover:text-gray-400">
            Hire me
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            className="bg-white px-5 py-2 rounded-full hover:bg-purple-300
                    text-black transition-all duration-200 ease-in"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isDrawerOpen && (
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg md:hidden">
          {/* Mobile Drawer */}
          <p className="mb-4">
            Developer & Security analyst <br />
            based in <span className="text-white">India.</span>
          </p>

          {/* Switch */}
          <div className="hidden md:flex relative w-10 h-5 bg-gray-700 rounded-full items-center justify-end p-1">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>

          {/* Links */}
          <a
            href="#Case-Studies"
            className="block mb-2 hover:underline hover:text-gray-400"
            onClick={toggleDrawer}
          >
            Case Studies
          </a>
          <a
            href="#Experience"
            className="block mb-2 hover:underline hover:text-gray-400"
            onClick={toggleDrawer}
          >
            Experience
          </a>
          <a
            href="#Hire-Me"
            className="block hover:underline hover:text-gray-400"
            onClick={toggleDrawer}
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
