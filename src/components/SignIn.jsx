import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
export default function SignIn() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center  justify-center bg-[url('/static/images/back_img.jpg')] bg-cover bg-fixed bg-center p-2">
        <HomeBtn />
        <Sign />
      </div>
    </>
  );
}
function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }
  const signIn = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in successfully");
      toast.success("user logged in successfully");
      localStorage.setItem("user", JSON.stringify(result));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("error signing in", error.message);
      toast.error("EmailId or password is incorrect");
    }
  };
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in successfully!");
      toast.success("user logged in successfully");
      localStorage.setItem("user", JSON.stringify(result));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Error signing in with google:", error.message);
    }
  };

  return (
    <div className="h-[100%] w-[25rem] rounded-3xl bg-white bg-opacity-20 lg:w-[40%]">
      <Toaster />
      <div className="flex h-full flex-col items-center justify-evenly">
        <h1 className="text bg-transparent bg-clip-text text-4xl font-bold text-white">
          Sign In
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="rounded-md  border-white bg-transparent text-center text-xl font-semibold text-white"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="rounded-sm bg-transparent text-center text-xl text-white"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="text-white" onClick={signIn}>
          Sign In
        </button>
        <div className="flex gap-3">
          <FcGoogle className="google-icon" />
          <button className=" text-white shadow-2xl" onClick={signInWithGoogle}>
            Continue with<span className="bg-transparent"> Google</span>
          </button>
        </div>
        <Link to="/login">
          <button
            onClick={refreshPage}
            className="text-xl text-white hover:shadow-white"
          >
            New User? Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}

function HomeBtn() {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }
  return (
    <Link to="/">
      <button
        className="mb-2 rounded-lg from-pink-600 to-red-500 pb-0  hover:bg-gradient-to-r hover:text-white"
        onClick={refreshPage}
      >
        <h1 className="webkit mb-6 bg-clip-text  text-xl font-extrabold text-transparent  hover:text-white md:text-4xl">
          Home
        </h1>
      </button>
    </Link>
  );
}
