import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { uploadBytes, getStorage, ref } from "firebase/storage";
import { toast, Toaster } from "react-hot-toast";
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
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [naam, setNaam] = useState("");
  const [mob, setMob] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [poster, setposter] = useState("");

  const signUp = async () => {
    try {
      const imgref = ref(storage, `uploads/users/${Date.now()}-${poster.name}`);
      const uploadResult = await uploadBytes(imgref, poster);
      await addDoc(collection(firestore, "users"), {
        naam,
        mob,
        roll,
        branch,
        imageURL: uploadResult.ref.fullPath,
      });
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created now login using same credentials");

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
    <div className="h-[85%] w-[85%] rounded-3xl bg-white bg-opacity-20 lg:w-[40%]">
      <Toaster />
      <div className="flex h-full flex-col items-center justify-evenly">
        <h1 className="text bg-transparent bg-clip-text text-4xl font-bold text-white">
          Create Account
        </h1>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="text-l h-5 rounded-md bg-transparent text-center font-semibold text-white"
          autoComplete=""
          onChange={(e) => setNaam(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter mobile number"
          className="text-l  rounded-md border-white bg-transparent text-center font-semibold text-white"
          autoComplete="mob"
          onChange={(e) => setMob(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Roll: BTECH/10XXX/22"
          className="text-l  rounded-md border-white bg-transparent text-center font-semibold text-white"
          autoComplete=""
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          type="text"
          placeholder="Branch"
          className="rounded-md  border-white bg-transparent text-center text-xl font-semibold text-white"
          autoComplete=""
          onChange={(e) => setBranch(e.target.value)}
        />
        <input
          type="file"
          placeholder="upload pic"
          className="ml-10 rounded-md border-white bg-transparent pl-4 text-center text-xl font-semibold text-white"
          autoComplete=""
          onChange={(e) => setposter(e.target.files[0])}
        />
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
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }
  return (
    <Link to="/">
      <button onClick={refreshPage}>
        <h1 className="webkit mb-6 bg-clip-text text-xl font-extrabold text-transparent md:text-4xl ">
          CLUBCONNECT
        </h1>
      </button>
    </Link>
  );
}
