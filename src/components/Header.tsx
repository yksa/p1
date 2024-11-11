import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-gray-200 px-8 py-4 flex justify-between items-center lg:h-[70px]">
      <div className="text-red-500 font-bold">LOGO</div>
      <nav className="gap-8 text-gray-700 hidden sm:flex">
        <a href="#" className="hover:text-red-500">
          Home
        </a>
        <a href="#" className="hover:text-red-500">
          Discovery
        </a>
        <a href="#" className="hover:text-red-500">
          Photos
        </a>
        <a href="#" className="hover:text-red-500">
          Contact
        </a>
        <a
          href="#"
          className="flex items-center text-xl text-gray-700 hover:text-red-500"
        >
          <FaRegUserCircle />
        </a>
      </nav>

      {/* Menu icon for mobile view */}
      <div className="text-gray-700 text-2xl sm:hidden">
        <IoMdMenu />
      </div>
    </header>
  );
};

export default Header;
