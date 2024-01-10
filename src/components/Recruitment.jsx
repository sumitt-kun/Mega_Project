import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";

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
    <div className="flex justify-evenly">
      <select
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
        className=""
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact No"
        className=""
        onChange={(e) => setphone(e.target.value)}
      />
      <input
        type="text"
        placeholder="BTECH/10XXX/XX"
        className=""
        onChange={(e) => setroll(e.target.value)}
      />
      <input
        type="text"
        placeholder="Branch"
        className=""
        onChange={(e) => setbranch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Why do you want to join?"
        className=""
        onChange={(e) => setmessage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Batch"
        className=""
        onChange={(e) => setbatch(e.target.value)}
      />
      <button onClick={addPost}>Submit</button>
    </div>
    )
};
