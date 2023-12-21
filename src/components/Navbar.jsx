import React from "react";
import { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
      if (!nav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
    };
    return (
      <div className="absolute grid grid-cols-3 w-full items-center justify-between p-4">
        <div className="z-20">
        <h1 className="webkit text-xl md:text-4xl font-extrabold text-transparent bg-clip-text">CLUBCONNECT</h1>
        </div>
        <div className="z-20">
        <img className="w-1/4 h-auto m-auto rounded-full shadow-2xl shadow-white" src="/src/images/bit.png" alt="bit-logo" />
        </div>
        <div className="z-20">
        <BsMenuButtonWideFill
          onClick={handleNav}
          className="cursor-pointer text-white hover:opacity-80 float-right"
          size={37}
        />
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 z-10 h-screen w-full flex-col bg-black/70 px-4 py-7 text-gray-300 duration-500 ease-in"
              : "absolute left-[-100%] top-0 z-10 h-screen duration-500 ease-in bg-red-800"
          }
        >
          <ul className="fixed flex h-full w-full flex-col items-center justify-center">
            <li className="hover: p-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-red-500">
            <button className="px-4 py-2 shadow-lg hover:text-white hover:shadow-red-500 focus:outline-none focus:ring focus:ring-violet-300">
            Home
            </button>
            </li>
            <li className="p-8 text-4xl font-bold text-transparent  hover:shadow-red-500 bg-clip-text bg-gradient-to-r from-pink-800 to-red-500">
            <button className="px-4 py-2 shadow-lg hover:text-white hover:shadow-red-500 focus:outline-none focus:ring focus:ring-violet-300">
            Contact Us
            </button>
            </li>
            <li className="p-8 text-5xl font-bold text-transparent  hover:shadow-red-500 bg-clip-text bg-gradient-to-r from-pink-800 to-red-500">
              <button className="px-4 py-2 shadow-lg hover:text-white hover:shadow-red-500 focus:outline-none focus:ring focus:ring-violet-300">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  export default Navbar