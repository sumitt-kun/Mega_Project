import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { uploadBytes, getStorage, ref } from "firebase/storage";

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
    <div className="flex  justify-evenly">
      <input
        type="text"
        placeholder="Club Name"
        className=""
        autoComplete="Club-Name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        className=" "
        autoComplete="Current-date"
        onChange={(e) => setdate(e.target.value)}
      />
      <input
        type="date"
        placeholder="Event-Date"
        className=""
        autoComplete="Date"
        onChange={(e) => seteventdate(e.target.value)}
      />
      <input
        type="file"
        className=""
        onChange={(e) => setposter(e.target.files[0])}
      />
      <input
        type="url"
        placeholder="Enter a link"
        className=""
        autoComplete="url"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={addPost}>Submit</button>
    </div>
  );
}
