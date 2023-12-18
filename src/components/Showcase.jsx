import React from "react";

function Showcase(){
    return (
    <div className="md:grid grid-cols-2">
        <div className="md:p-5 md:p-auto justify-center text-white align-middle bg-gradient-to-r from-pink-800 to-red-500">
            <div>
            <p className="text-4xl text-left md:text-6xl font-serif p-8">Empowering Clubs in the Digital Realm</p>
            <p className="text-2xl text-left md:text-3xl p-8">Your Virtual Hub for Seamless Collaboration and Activities.</p>
            </div>
            <div className="grid grid-cols-2">
                <button className="w-full m-5 mt-10 text-center p-5 rounded-2xl md:text-4xl hover:opacity-80 border-4 h14 
                bg-gradient-to-r from-red-700 to-pink-800"
                >Register Now
                </button>
            </div>
        </div>
        <div className="justify-center shadow-2xl">
            <img className="w-full h-auto shadow-2xl block m-auto md:w-full" src="src/images/college-stud.png" alt="" />
        </div>
    </div>
    )
}
export default Showcase