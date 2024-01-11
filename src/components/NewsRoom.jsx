import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default function NewsR() {
  return (
    <div>
      <p className="leading-13 mb-6 bg-gradient-to-r from-red-600 to-pink-800 p-6 text-left font-serif text-4xl text-white md:text-6xl">
          NEWSROOM
      </p>
      <Ns />
    </div>
  );
}
const Ns = () => {
  const [newss, setnewss] = useState([]);
  useEffect(() => {
    Nws().then((newss) => setnewss(newss.docs));
  }, []);
  return (
    <div className="grid md:grid-cols-2 bg-[url('/static/images/newsroom.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed">
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
    <div class="news-container rounded-xl shadow-lg shadow-white bg-gradient-to-r from-pink-800 to-red-500 text-white m-10">
      <div className="l-card items-center rounded-xl">
        <div className="l-front">
          <img class="w-full h-full border-black border-2 shadow-lg shadow-white" src={url} alt="poster"></img>
        </div>
        <div className="l-rear">
          <div class="text-2xl p-5 m-5">
            <div class="mb-2 mr-2 text-3xl font-bold uppercase text-center">{props.name}</div>
          </div>  
          <div class="grid text-center">
            <span class="mb-2 mr-2 inline-block rounded-full font-semibold text-white uppercase">
              Posted on: {props.date}
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full font-semibold text-white uppercase">
              event Date: {props.eventdate}
            </span>
            <a href={props.Url} class="inline-block underline rounded-full font-semibold text-white uppercase">
              link: {props.Url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
