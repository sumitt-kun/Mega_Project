import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { getStorage} from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);  

export default function Applications() {
  return (
    <div>
      <h1 className="text-xl font-bold">Applications</h1>
      <Content />
    </div>
  );
}

const fetchApplications = async () => {
  const admin = JSON.parse(localStorage.getItem('user'));
  const email = admin?.user?.email;
  const index = email.indexOf('@');
  const collname = email.slice(0, index);
  return getDocs(collection(firestore, collname));
}

const Content = () => {
  const [appln, setappln] = useState([]);

  useEffect(() => {
    fetchApplications().then((appln) => setappln(appln.docs));
  }, []);
  return (
    <div>
      {appln.map((appln) => (
        <Card key={appln.id} {...appln.data()} />
      ))}
    </div>
  );
};

function Card(props) {
  return (
    <div class="max-w-sm overflow-hidden rounded shadow-lg">
      <div class="px-6 py-4">
        <div class="mb-2 text-xl font-bold">{props.name}</div>
        <p class="text-base text-gray-700">
          This application was posted by {props.name}
        </p>
      </div>
      <div class="px-6 pb-2 pt-4">
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          recieved on: {props.datetime}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Branch: {props.branch}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Roll No: {props.roll}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Mobile: {props.phone}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Why join: {props.message}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Batch: {props.batch}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Account Id: {props.email}
        </span>
      </div>
    </div>
  );
}
