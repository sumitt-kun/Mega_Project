import React from "react";

function Footer(){
    return (
        <div className="grid md:grid-cols-3  bg-black text-gray-400 p-16">
            <div className="leading-10 text-center">
                <p>All Rights Reserved</p>
                <p>Copyright @2023</p>
                <a href="https://pearlcrestsociety.in/">BITCLUBCONNECT.com</a>
            </div>
            <div>
                <ul className="leading-10 text-center">
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li></li>
                    <li><button>Meet the Developers</button></li>
                    <li><button>Login</button></li>
                </ul>
            </div>
            <div className="text-center">
                <p>Your Review down here</p>
                <form action="post">
                    <textarea placeholder="YOUR COMPLAINTS...." className="text-area text-black" type="text" />
                    <button className="bg-gray-300 p-2 hover:opacity-80 text-black" type="submit">Submit</button>
                </form>
            </div>  
        </div>
    )
}
export default Footer 