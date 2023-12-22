import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <div className="flex h-screen w-full flex-col  items-center justify-center bg-[url('../src/images/back_img.jpg')] bg-cover bg-fixed bg-center">
        <Log />
      </div>
    </>
  );
}
function Log() {
  return (
    <div className="h-[80%] w-[40%] rounded-3xl bg-white bg-opacity-20">
      <form className="flex h-full flex-col items-center justify-evenly">
        <h1 className="text bg-transparent bg-clip-text text-4xl font-bold text-white">
          Login
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="rounded-md  border-white bg-transparent text-center text-xl font-semibold text-white"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="rounded-sm bg-transparent text-center text-xl text-white"
        />
        <div className="flex gap-3">
          <FaGoogle className="text-white" />
          <button className=" text-white shadow-2xl">
            Login with<span bg-transparent> Google</span>
          </button>
        </div>
        <button className="text-xl text-white hover:shadow-white">
          New User? SignUp
        </button>
      </form>
    </div>
  );
}

function Sign() {
  return (
    <div className="h-[80%] w-[40%] rounded-3xl bg-white bg-opacity-20">
      <form className="flex h-full flex-col items-center justify-evenly">
        <h1 className="text bg-transparent bg-clip-text text-4xl font-bold text-white">
          SignUp
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="rounded-md  border-white bg-transparent text-center text-xl font-semibold text-white"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="rounded-sm bg-transparent text-center text-xl text-white"
        />
        <div className="flex gap-3">
          <FaGoogle className="text-white" />
          <button className=" text-white shadow-2xl">
            Login with<span bg-transparent> Google</span>
          </button>
        </div>
        <button className="text-xl text-white hover:shadow-white">
          Old User? Login
        </button>
      </form>
    </div>
  );
}
