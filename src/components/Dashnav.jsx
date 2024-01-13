import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navfunc = () => {
    const [isOpen, setIsOpen] = useState("false");
    const toggleNavbar = () =>(
        setIsOpen(!isOpen)
    )
  
    return(
      <div>
        <div className="hidden md:flex justify-center">
          <Sidebar />
        </div>
        <div className="md:hidden my-5">
          <button className="p-3" onClick={toggleNavbar}>{isOpen ? <FaBars className="text-white" size={32} /> : <FaRegWindowClose className="text-white" size={32}/>}</button>
        </div>
      </div>
    )
}
export default Navfunc