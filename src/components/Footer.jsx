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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToDevelopers = () => {
    const developersSection = document.getElementById("developersSection");
    if (developersSection) {
      developersSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToClubs = () => {
    const clubListSection = document.getElementById("clubListSection");
    if (clubListSection) {
      clubListSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid bg-black p-16 text-gray-400 md:grid-cols-3">
      <Toaster />
      <div className="text-center leading-10">
        <p>All Rights Reserved</p>
        <p>Copyright @2023</p>
        <a href="" onClick={scrollToTop}>
          ClubConnect.com
        </a>
      </div>
      <div>
        <ul className="text-center leading-10">
          <li>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={scrollToTop}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={scrollToTop}
            >
              About
            </button>
          </li>
          <li></li>
          <li>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={scrollToDevelopers}
            >
              Meet the Developers
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={scrollToClubs}
            >
              Explore Clubs
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <p>Your Review down here</p>
        <input
          type="text"
          placeholder="Name"
          className="text-center px-4 py-2 rounded-md border"
          autoComplete="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your review"
          className="h-20 text-center px-4 py-2 rounded-md border"
          autoComplete=""
          onChange={(e) => setRev(e.target.value)}
        />
        <button
          onClick={addRev}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Footer;
  