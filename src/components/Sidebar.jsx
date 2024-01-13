import { Link } from "react-router-dom";
import { FaHome, FaCalendar, FaPowerOff, FaNewspaper } from "react-icons/fa";
const logout = () =>{
    localStorage.clear('user');
    window.location.href = '/login';
}

function Sidebar(){
    return (
        <div className="m-6">
            <ul className="md:flex absolute z-10 bg-[url('/static/images/dashbg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed md:relative justify-center ">
                <li className="flex text-white rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaHome className="my-auto ml-8" size={25}/>
                    <Link to="/">
                        <button className="p-5 font-sans text-lg font-bold" >Home</button>
                    </Link>
                </li>
                <li className="flex  text-white rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaCalendar className="my-auto ml-8" size={25}/>
                    <Link to="/dashboard">
                        <button className="p-5 font-sans text-lg font-bold" >Dashboard</button>
                    </Link>
                </li>
                <li className="flex  text-white rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaHome className="my-auto ml-8" size={25}/>
                    <Link to="/recruit">
                        <button className="p-5 font-sans text-lg font-bold" >Join Clubs</button>
                    </Link>
                </li>
                <li className="flex  text-white rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaNewspaper className="my-auto ml-8" size={25}/>
                    <Link to="/news">
                        <button className="p-5 font-sans text-lg font-bold" >Newsroom</button>
                    </ Link>
                </li>
                <li className="flex  text-white rounded-xl m-3 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-r from-pink-600 to-red-500 hover:text-white">
                    <FaPowerOff className="my-auto ml-8" size={25}/>
                    <button onClick={logout} className="p-5 font-sans text-lg font-bold" >Logout</button>
                </li>
            </ul>
        </div>
    ) 
}

export default Sidebar
