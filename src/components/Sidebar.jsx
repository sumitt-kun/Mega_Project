import React from "react";

function Sidebar(){
    const logout = () => {
        localStorage.clear('user')
        window.location.href = "/";
    }
    return (
        <div className="w-full h-screen">
            <div className="grid grid-rows mt-6">
                <button className="p-5" >Dashboard</button>
                <button className="p-5">Event Calendar</button>
                <button className="p-5">Join Clubs</button>
                <button className="p-5">Newsroom</button>
                <button onClick={logout} className="p-5">Logout</button>
            </div>
        </div>
    )
}

export default Sidebar

