import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { uploadBytes, getStorage, ref } from "firebase/storage";
import { toast, Toaster } from "react-hot-toast";

function Footer() {
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  const [rev, setRev] = useState("");
  const [Name, setName] = useState("");
  const addRev = async () => {
    await addDoc(collection(firestore, "reviews"), {
      Name,
      rev,
    });
    toast.success("Thanks for your review!");
    console.log("done");
  };
  return (
    <div className="grid bg-black  p-16 text-gray-400 md:grid-cols-3">
      <Toaster />
      <div className="text-center leading-10">
        <p>All Rights Reserved</p>
        <p>Copyright @2023</p>
        <a href="https://pearlcrestsociety.in/">BITCLUBCONNECT.com</a>
      </div>
      <div>
        <ul className="text-center leading-10">
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li></li>
          <li>
            <button>Meet the Developers</button>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <p>Your Review down here</p>
        <input
          type="text"
          placeholder="Name"
          className="text-center"
          autoComplete="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your review"
          className="h-20 text-center"
          autoComplete=""
          onChange={(e) => setRev(e.target.value)}
        />
        <button onClick={addRev}>Submit</button>
      </div>
    </div>
  );
}
export default Footer;
