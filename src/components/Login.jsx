import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="flex h-screen w-full flex-col  items-center justify-center bg-[url('/static/images/back_img.jpg')] bg-cover bg-fixed bg-center">
        <HomeBtn />
        <SignUp />
      </div>
    </>
  );
}
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.error("user logged in successfully");
    } catch (error) {
      console.error("error signing in", error.message);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in successfully!");
    } catch (error) {
      console.error("Error signing in with google:", error.message);
    }
  };
  return (
    <div className="h-[80%] w-[40%] rounded-3xl bg-white bg-opacity-20">
      <div className="flex h-full flex-col items-center justify-evenly">
        <h1 className="text bg-transparent bg-clip-text text-4xl font-bold text-white">
          Sign Up
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
        <button className="text-white" onClick={signUp}>
          Sign Up
        </button>
        <div className="flex gap-3">
          <FcGoogle className="google-icon" />
          <button className=" text-white shadow-2xl" onClick={signInWithGoogle}>
            Continue with<span className="bg-transparent"> Google</span>
          </button>
        </div>
        <Link to="/signin">
          <button className="text-xl text-white hover:shadow-white">
            Existing User? Login
          </button>
        </Link>
      </div>
    </div>
  );
}

function HomeBtn() {
  return (
    <Link to="/">
      <button>
        <h1 className="webkit mb-6 bg-clip-text text-xl font-extrabold text-transparent md:text-4xl ">
          CLUBCONNECT
        </h1>
      </button>
    </Link>
  );
}
