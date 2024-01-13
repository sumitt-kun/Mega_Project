import React from "react";
import Dashmain from "./Dashmain";
import Footer from "./Footer";
import Navfunc from "./Dashnav";

function Nav(){
    return(
        <div className="p-2 grid grid-cols-2 bg-gradient-to-r from-pink-800 to-red-500 align-middle">
              <h1 className="text-white mb-auto m-auto bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
              CLUBCONNECT
              </h1>
              <ul className="flex justify-end p-1">
                <li className=""><img className="p-2" src="../images/kush-photu.jpg" alt="profile-pic"></img></li>
                <li className=""><p className="p-2 text-white">Your Profile</p></li>
              </ul>
        </div>
    )
}

function Dashboard(){
    return (
        <div className="bg-[url('/static/images/dashbg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
            <Nav />
            <div className="text-center">
              <Navfunc />
              <Dashmain />
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;