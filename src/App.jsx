import { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
function App() {
  return (
    <div>
      <Navbar />
      <Top_most />
    </div>
  );
}

export default App;

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute flex w-full items-center justify-between p-4">
      <h1 className="z-20 text-2xl font-bold text-white">BIT Clubs</h1>
      <BsMenuButtonWideFill
        onClick={handleNav}
        className="z-20 cursor-pointer text-white"
        size={25}
      />
      <div
        className={
          nav
            ? "fixed left-0 top-0 z-10 h-screen w-full flex-col bg-black/90 px-4 py-7 text-gray-300 duration-300 ease-in"
            : "absolute left-[-100%] top-0 z-10 h-screen duration-500 ease-in"
        }
      >
        <ul className="fixed flex h-full w-full flex-col items-center justify-center">
          <li className="hover: p-8 text-3xl font-bold">Home</li>
          <li className="p-8 text-4xl font-bold">Contact Us</li>
          <li className="p-8 text-4xl font-bold ">
            <button className="rounded-full border px-4 py-2 shadow shadow-lg hover:bg-white hover:text-black hover:shadow-cyan-500/50 focus:outline-none focus:ring focus:ring-violet-300">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Top_most() {
  return (
    <div className="h-screen w-full">
      <img
        className="left-0 top-0 h-screen w-full object-cover"
        src="src\images\4B8FECFF-C1AC-404C-AD2A-04AC080829A0.JPG"
        alt="bit-im"
      ></img>
      <div className="absolute left-0 top-0 h-screen w-full bg-black/10"></div>
      <div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
