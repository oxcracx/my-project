"use client";
import Link from "next/link";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-[#060608] text-white top-0 right-0 z-[9999] px-5 fixed w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-0.5 bg-white"></div>
          <Link href="/" className="text-lg font-semibold">CRACX</Link>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <p className="text-[#86868D]">
            Developer & Security Analyst <br /> based in <span className="text-white">India.</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold">
          <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          <Link href="#experience" className="hover:text-gray-400">Experience</Link>
          <Link href="#contact" className="hover:text-gray-400">Hire me</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/appointment">
            <button className="bg-white px-5 py-2 rounded-full hover:bg-purple-300 text-black transition-all duration-200 ease-in">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            {isDrawerOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center space-y-6 text-white z-[10000]`}
      >
        <button onClick={toggleDrawer} className="absolute top-5 right-5 text-3xl">
          <FiX />
        </button>
        
        <p className="text-center text-gray-400">
          Developer & Security Analyst <br /> based in <span className="text-white">India.</span>
        </p>
        <Link href="#projects" className="text-xl hover:text-gray-400" onClick={toggleDrawer}>Projects</Link>
        <Link href="#experience" className="text-xl hover:text-gray-400" onClick={toggleDrawer}>Experience</Link>
        <Link href="#contact" className="text-xl hover:text-gray-400" onClick={toggleDrawer}>Hire me</Link>
      </div>
    </header>
  );
};

export default Navbar;
