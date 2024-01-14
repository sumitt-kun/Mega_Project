import React from "react";
import { FcGoogle } from "react-icons/fc";
import { googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  getAuth
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { uploadBytes, getStorage, ref } from "firebase/storage";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; 
import { useNavigate } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center  justify-center bg-[url('/static/images/back_img.jpg')] bg-cover bg-fixed bg-center p-2">
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
  const auth = getAuth();
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      const imgref = ref(storage, `uploads/users/${Date.now()}-${poster.name}`);
      const uploadResult = await uploadBytes(imgref, poster);
      if(naam!=="" && mob!=="" && roll!=="" && branch!=="" && poster!==""){
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        const uid = user.uid;
        const emailid = user.email;
        await addDoc(collection(firestore, "users"), {
          naam,
          mob,
          roll,
          branch,
          imageURL: uploadResult.ref.fullPath,
          emailid,
          uid
        });
        Swal.fire({
          title: 'GOOD JOB!',
          text: `Welcome BITIAN, ${naam}`,
          icon: 'success',
          confirmButtonText: 'Continue Logging in'
        })
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
      else{
        Swal.fire({
          title: 'Error! Fields are empty',
          text: 'Please complete your Profile',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error("account already exists or invalid emailid");
    }
  };
  const signInWithGoogle = async () => {
    try {
      const imgref = ref(storage, `uploads/users/${Date.now()}-${poster.name}`);
      const uploadResult = await uploadBytes(imgref, poster);
      if(naam!=="" && mob!=="" && roll!=="" && branch!=="" && poster!==""){
        await signInWithPopup(auth, googleProvider);
        const user = auth.currentUser;
        const uid = user.uid;
        const emailid = user.email;
        await addDoc(collection(firestore, "users"), {
          naam,
          mob,
          roll,
          branch,
          imageURL: uploadResult.ref.fullPath,
          emailid,
          uid
        });
        Swal.fire({
          title: 'GOOD JOB!',
          text: `Welcome BITIAN`,
          icon: 'success',
          confirmButtonText: 'Continue Logging in'
        })
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
        console.log("User signed in successfully!");
      }
      else{
        Swal.fire({
          title: 'Error! Fields are empty',
          text: 'Please complete your Profile',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    } catch (error) {
      console.error("Error signing in with google:", error.message);
      toast.error("account already exists or invalid emailid");
    }
  };

  return (
    <div className="h-[100%] w-[25rem] rounded-3xl bg-white bg-opacity-20 lg:w-[40%]">
      <Toaster />
      <div className="flex h-screen flex-col items-center justify-evenly">
        <h1 className="text p-2 bg-transparent bg-clip-text text-4xl font-bold text-white">
          Create Account
        </h1>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="text-l h-5 p-2 rounded-md bg-transparent text-center font-semibold text-white"
          autoComplete=""
          onChange={(e) => setNaam(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter mobile number"
          className="text-l p-2 rounded-md border-white bg-transparent text-center font-semibold text-white"
          autoComplete="mob"
          onChange={(e) => setMob(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Roll: BTECH/10XXX/22"
          className="text-l p-2 rounded-md border-white bg-transparent text-center font-semibold text-white"
          autoComplete=""
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          type="text"
          placeholder="Branch"
          className="rounded-md p-2 border-white bg-transparent text-center text-xl font-semibold text-white"
          autoComplete=""
          onChange={(e) => setBranch(e.target.value)}
        />
        <label className="drop-container" id="drop-container">
        <span class="drop-title">Drop Your Photo here</span>
        <input
          type="file"
          placeholder=""
          className="ml-10 rounded-md border-white bg-transparent pl-4 text-center text-xl font-semibold text-gray-800"
          autoComplete=""
          accept="image/*"
          onChange={(e) => setposter(e.target.files[0])}
        />
        </label>
        <input
          type="text"
          placeholder="Email"
          className="rounded-md p-2 border-white bg-transparent text-center text-xl font-semibold text-white"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="rounded-sm p-2 bg-transparent text-center text-xl text-white"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="text-white p-2" onClick={signUp}>
          Sign Up
        </button>
        <div className="flex gap-3">
          <FcGoogle className="google-icon" />
          <button className=" text-white shadow-2xl" onClick={signInWithGoogle}>
            Continue with<span className="bg-transparent"> Google</span>
          </button>
        </div>

        <Link to="/signin">
          <button className="text-xl p-2 text-white hover:shadow-white">
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
          Home
        </h1>
      </button>
    </Link>
  );
}
