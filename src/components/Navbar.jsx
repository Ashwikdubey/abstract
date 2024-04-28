import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { Search } from "lucide-react";
const Navbar = () => {
  const [isMenu, setisMenu] = useState(true);
  const toggleMenu = () => {
    setisMenu(!isMenu);
  };
  return (
    <nav>
      <div>
      <div className="flex bg-black items-center text-white justify-between py-6 lg:px-24 px-2">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="lg:w-32 w-28" />
          <span className="lg:text-2xl text-xl">| Help Center</span>
        </div>
        <div className="lg:flex space-x-3 hidden">
          <a
            href=""
            className="border rounded-lg bg-neutral-900 py-2 px-6 text-xl"
          >
            Submit a request
          </a>
          <a
            href=""
            className=" rounded-lg hover:bg-white hover:text-black transition-all duration-150 bg-[#4C5FD5] py-2 px-6 text-xl"
          >
            Sign in
          </a>
        </div>
        <div className="flex items-center space-x-2 lg:hidden">
          <Search strokeWidth={4} size={25} />
          <button onClick={toggleMenu}>
            {isMenu ? (
              <Menu strokeWidth={3} size={25} />
            ) : (
              <X strokeWidth={3} size={25} />
            )}
          </button>
        </div>
      </div>
      {!isMenu&&(
         <div className="border-t border-neutral-500 bg-neutral-900 flex space-y-4 p-10 items-center text-white flex-col">
           <span className="text-xl">Submit a request</span>
           <span className="text-xl ">Sign in</span>
         </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
