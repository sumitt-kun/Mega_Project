import React from "react";
import Sidebar from "./Sidebar";
import Dashmain from "./Dashmain";
import Footer from "./Footer";

function Nav(){
    return(
        <div className="p-2 grid grid-cols-2">
            <h1 className="webkit text-xl md:text-4xl font-extrabold text-transparent bg-clip-text">CLUBCONNECT</h1>
            <div>
                <ul className="flex">
                    <li><img src="../images/acm.jpg"></img></li>
                    <li>Your Profile</li>
                </ul>
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