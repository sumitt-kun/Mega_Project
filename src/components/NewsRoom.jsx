import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { uploadBytes, getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default function NewsR() {
  return (
    <div>
      <h1 className="text-xl font-bold">NewsRoom</h1>
      <Ns />
      <Cards />
    </div>
  );
}
const Ns = () => {
  const [newss, setnewss] = useState([]);
  useEffect(() => {
    Nws().then((newss) => setnewss(newss.docs));
  }, []);
  return (
    <div>
      {newss.map((newss) => (
        <Cards key={newss.id} {...newss.data()} />
      ))}
    </div>
  );
};

const Nws = () => {
  const firestore = getFirestore(firebaseApp);
  return getDocs(collection(firestore, "news"));
};

const getImageUrl = async (path) => {
  return await getDownloadURL(ref(storage, path));
};

function Cards(props) {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    getImageUrl(props.imageURL).then((url) => setUrl(url));
  }, [props.imageURL]);
  return (
    <div class="max-w-sm overflow-hidden rounded shadow-lg">
      <img class="w-full" src={url} alt="poster"></img>
      <div class="px-6 py-4">
        <div class="mb-2 text-xl font-bold">{props.name}</div>
        <p class="text-base text-gray-700">
          This event was posted by {props.name}
        </p>
      </div>
      <div class="px-6 pb-2 pt-4">
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          posted on: {props.date}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          event Date: {props.eventdate}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          link: {props.Url}
        </span>
      </div>
    </div>
  );
}
