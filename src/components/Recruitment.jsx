import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import Navfunc from "./Dashnav";
function Navigator(){
  const [isOpen, setIsOpen] = useState("false");
  return (
  <Navfunc props={isOpen}/>
  )
}

export default function Recruit(){
    const user = JSON.parse(localStorage.getItem('user'));
    const [club, setclub] = useState("");
    const [name, setname] = useState("");
    const datetime = getCurrentDateTime();
    const [phone, setphone] = useState("");
    const [branch, setbranch] = useState("");
    const [message, setmessage] = useState("");
    const [roll, setroll] = useState("");
    const [batch, setbatch] = useState("");
    const email = user?.user?.email;
    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);

    function getCurrentDateTime() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const hours = String(today.getHours()).padStart(2, "0");
        const minutes = String(today.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    const addPost = async () => {
        await addDoc(collection(firestore, club),{
            email,
            name,
            datetime, 
            phone,
            branch,
            message,
            roll,
            batch,
        });
        console.log(email, club, name, datetime, phone, branch, message, roll, batch);
        console.log("data added");
    };
    return (
      <div className="flex h-screen w-full flex-col  items-center justify-center bg-[url('/static/images/back_img.jpg')] bg-cover bg-fixed bg-center">
        <Navigator />
      <div className="h-[90%] w-[25rem] rounded-3xl bg-white bg-opacity-20">
        <div className="flex h-full flex-col items-left justify-evenly m-5">
        <h1 className=" text-white text-4xl font-bold text-center ">
          JOIN CLUBS
        </h1>
        <select className=" rounded-xl p-1 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e)=> setclub(e.target.value)} 
        >
          <option value="">Select a Club</option>w
          <option value="ietbit">IET</option>     
          <option value="ieeebit">IEEE</option>
          <option value="acmbit">ACM</option>
          <option value="ietebit">IETE</option>
        </select>
        <input
          type="text"
          placeholder="Enter Name"
          className="rounded-xl p-1 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact No"
          className="rounded-xl p-1 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e) => setphone(e.target.value)}
        />
        <input
          type="text"
          placeholder="BTECH/10XXX/XX"
          className="rounded-xl p-1 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e) => setroll(e.target.value)}
        />
        <input
          type="text"
          placeholder="Branch"
          className="rounded-xl p-1 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e) => setbranch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Why do you want to join?"
          className="rounded-xl p-1 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e) => setmessage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Batch"
          className="rounded-xl p-1 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e) => setbatch(e.target.value)}
        />
        <button className="mx-auto text-white w-full rounded-xl border-2 bg-gradient-to-r from-red-700 to-pink-800 py-2
                text-center hover:opacity-80 md:text-2xl" onClick={addPost}>Submit</button>
      </div>
    </div>
    </div>
    )
};
