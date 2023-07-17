import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="socundery-bg px-2 h-[60px] md:h-[80px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-[50px] w-[50px] border border-gray-600 hover-color-icon rounded-full flex items-center justify-center">
          <img className="w-[40px] h-[40px]" src={logo} alt="" />
        </div>
        <div className="h-[50px] w-[50px] hover:cursor-pointer md:h-auto md:w-auto border border-gray-600 hover-color-icon rounded-full flex items-center justify-center">
          <FiSearch className="md:hidden" />
          <div className="md:flex hidden items-center">
            <input
              type="text"
              placeholder="Search"
              className="py-2 ps-4 rounded-s-full bg-transparent border-e border-gray-600"
            />
            <button className="p-2">
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="">home2</div>
      <div className="">home3</div>
    </div>
  );
};

export default Navbar;
