import React from "react";
import { FaHome, FaCalendar, FaPowerOff, FaNewspaper } from "react-icons/fa";
const logout = () =>{
    localStorage.clear('user');
    window.location.href = '/login';
}
function Sidebar(){
    return (
        <div className="w-full h-screen bg-gradient-to-r from-pink-800 to-red-500">
            <div className="grid grid-rows mt-6 bg-gradient-to-r from-pink-800 to-red-500">
                <div className="flex bg-white  text-gray-600 rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaHome className="my-auto ml-8" size={25}/>
                    <button className="p-5 font-sans text-lg font-bold" >Home</button>
                </div>
                <div className="flex bg-white text-gray-600 rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaCalendar className="my-auto ml-8" size={25}/>
                    <button className="p-5 font-sans text-lg font-bold" >Event Calendar</button>
                </div>
                <div className="flex bg-white text-gray-600 rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaHome className="my-auto ml-8" size={25}/>
                    <button className="p-5 font-sans text-lg font-bold" >Join Clubs</button>
                </div>
                <div className="flex bg-white text-gray-600 rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaNewspaper className="my-auto ml-8" size={25}/>
                    <button className="p-5 font-sans text-lg font-bold" >Newsroom</button>
                </div>
                <div className="flex bg-white text-gray-600 rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaPowerOff className="my-auto ml-8" size={25}/>
                    <button onClick={logout} className="p-5 font-sans text-lg font-bold" >Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
