import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { uploadBytes, getStorage, ref } from "firebase/storage";
import clubdetail from "../clubdetails";

export default function AdminNews() {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [eventdate, seteventdate] = useState("");
  const [poster, setposter] = useState("");
  const [Url, setUrl] = useState("");
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  //   const firebase =
  function addpost() {
    console.log(name, date, eventdate, poster, Url);
  }
  // const handlePost

  const addPost = async () => {
    const imgref = ref(
      storage,
      `uploads/newsroom/${Date.now()}-${poster.name}`,
    );
    const uploadResult = await uploadBytes(imgref, poster);
    await addDoc(collection(firestore, "news"), {
      name,
      date,
      eventdate,
      Url,
      imageURL: uploadResult.ref.fullPath,
    });
    console.log("done");
  };
  return (
    <div className="flex h-screen w-full flex-col  items-center justify-center bg-[url('/static/images/back_img.jpg')] bg-cover bg-fixed bg-center">
      <div className="h-[80%] w-[25rem] rounded-3xl bg-white bg-opacity-20">
        <div className="flex h-full flex-col items-left justify-evenly m-5">
        <h1 className=" text-white text-4xl font-bold text-center ">
          ADD NOTICE
        </h1>
          <select className=" rounded-xl p-2 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
          onChange={(e) => setname(e.target.value)}
          >
            <option value="">Select a Club from dropdown</option>
            {clubdetail.map((ele) => (
              <option value={ele.name}>{ele.name}</option>
            ))}
          </select>
          <input
            type="date"
            placeholder="Date"
            className=" rounded-xl p-2 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
            autoComplete="Current-date"
            onChange={(e) => setdate(e.target.value)}
          />
          <input
            type="date"
            placeholder="Event-Date"
            className=" rounded-xl p-2 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
            autoComplete="Date"
            onChange={(e) => seteventdate(e.target.value)}
          />
          <input
            type="file"
            className="text-white rounded-xl p-2 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
            onChange={(e) => setposter(e.target.files[0])}
          />
          <input
            type="url"
            placeholder="Enter a link"
            className=" rounded-xl p-2 text-center bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed"
            autoComplete="url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="mx-auto text-white w-full rounded-xl border-2 bg-gradient-to-r from-red-700 to-pink-800 py-2
                text-center hover:opacity-80 md:text-2xl" onClick={addPost}>Submit</button>
        </div>
      </div>
    </div>
  );
}
