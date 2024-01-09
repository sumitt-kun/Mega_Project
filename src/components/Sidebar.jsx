import React from "react";
import { Link } from "react-router-dom";
function Sidebar(){
    return (
        <div className="w-full h-screen">
            <div className="grid grid-rows mt-6">
                <button className="p-5" >Dashboard</button>
                <button className="p-5">Event Calendar</button>
                <button className="p-5">Join Clubs</button>
                <button className="p-5">Newsroom</button>
            </div>
        </div>
    )
}

export default Sidebar

