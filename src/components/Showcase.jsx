import React from "react";

function Showcase(){
    return (
    <div className="md:grid grid-cols-2">
        <div className="md:p-8 md:p-auto justify-center text-white align-middle bg-gradient-to-r from-pink-800 to-red-500">
            <p className="text-4xl text-left md:text-6xl font-serif p-5">Empowering Clubs in the Digital Realm</p>
            <p className="text-2xl text-left md:text-3xl p-5">Your Virtual Hub for Seamless Collaboration and Activities.</p>
        </div>
        <div className="justify-center shadow-2xl">
            <img className="w-full h-auto shadow-2xl block m-auto md:w-full md:h-2/3" src="src/images/showcase-image.jpg" alt="" />
        </div>
    </div>
    )
}
export default Showcase