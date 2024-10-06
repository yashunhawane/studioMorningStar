import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 mb-4 lg:py-6">
      <div className="flex items-center">
         <img 
    src={logo}
    alt="The Morning Star Studio Logo" 
    className="h-16 sm:h-20 lg:h-24" 
  />
      </div>
      <ul className="flex items-center justify-end">
        <li className="mr-6 lg:mr-12">
          <a
            href="#"
            className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li className="mr-6 lg:mr-12">
          <a
            href="#"
            className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            Services
          </a>
        </li>
        <li className="mr-6 lg:mr-12">
          <a
            href="#"
            className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;