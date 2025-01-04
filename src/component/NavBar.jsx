const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center py-4 mb-4 lg:py-6 z-10">
      {/* Logo Container */}
      <div className="flex items-center ml-8"> {/* Added ml-8 to shift the logo slightly to the right */}
        <img
          src="/assets/logo4.png"
          alt="The Morning Star Studio Logo"
          className="h-20 sm:h-22 lg:h-24"
        />
      </div>

      {/* Navbar Links */}
      <ul className="flex justify-center items-center flex-1 space-x-12"> {/* Centering the links and adding space between them */}
        <li>
          <a
            href="#"
            className="text-white font-bold text-lg hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white font-bold text-lg hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
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
