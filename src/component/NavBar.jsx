import { useState } from "react";

const NavBar = () => {
  // State for toggling the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center py-4 mb-4 lg:py-6 z-10">
      {/* Logo Container */}
      <div className="flex items-center ml-8">
        <img
          src="/assets/logo4.png"
          alt="The Morning Star Studio Logo"
          className="h-20 sm:h-22 lg:h-24"
        />
      </div>

      {/* Hamburger Icon (only visible on small screens) */}
      <div className="lg:hidden flex items-center mr-8">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`flex justify-center items-center flex-1 space-x-12 lg:flex ${isMenuOpen ? "block" : "hidden"
          } lg:block`}
      >
        <li>
          <a
            href="#about"
            className="text-white font-bold text-lg hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-white font-bold text-lg hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white font-bold text-lg hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
