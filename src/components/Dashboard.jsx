import React from "react";
import Sidebar from "./Sidebar";
import Dashmain from "./Dashmain";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function HomeBtn() {
    return (
      <Link to="/">
        <button>
          <h1 className="webkit mb-auto ml-2 bg-clip-text text-xl font-extrabold text-transparent md:text-4xl">
            CLUBCONNECT
          </h1>
        </button>
      </Link>
    );
  }
function Nav(){
    return(
        <div className="p-2 grid grid-cols-2 bg-gray-900">
            <HomeBtn />
            <div>
                <div className="flex float-right m-auto p-1">
                    <img className="p-2" src="../images/kush-photu.jpg" alt="profile-pic"></img>
                    <p className="p-2 text-white">Your Profile</p>
                </div>
            </div>
        </div>
    )
}
function Dashboard(){
    return (
        <div>
            <Nav />
            <div className="dashboard grid">
            <Sidebar />
            <Dashmain />
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;