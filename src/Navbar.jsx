import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">$OLIVIA</div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              faq
            </a>
          </li>
          <li>
            <a
              href="#community"
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              Community
            </a>
          </li>
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes size={24} className="transition-transform duration-300 ease-in-out" />
            ) : (
              <FaBars size={24} className="transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4 space-y-4 px-6 pb-4 transition-all duration-300 ease-in-out">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              faq
            </a>
          </li>
          <li>
            <a
              href="#community"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
            >
              Community
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
