import React, { useState } from "react";
import clubdetail from "../clubdetails";

function ListC() {
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("None");
  let sortedItems = clubdetail;
  if (sortBy === "default") sortedItems = clubdetail;
  if (sortBy === "name-asc")
    sortedItems = clubdetail
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "name-desc")
    sortedItems = clubdetail
      .slice()
      .sort((a, b) => b.name.localeCompare(a.name));

  let filteredItems = sortedItems;
  if (filterBy === "none") filteredItems = sortedItems;
  if (filterBy === "tech")
    filteredItems = sortedItems.filter((e) => e.type === "technical");
  if (filterBy === "cult")
    filteredItems = sortedItems.filter((e) => e.type === "cultural");
  return (
    <div className="bg-[url('../src/images/bg-for-clubs.jpg')] bg-cover bg-fixed bg-center bg-no-repeat md:bg-center">
      <h2 className="mb-6 bg-gradient-to-r from-red-600 to-pink-800 p-5 text-left font-serif text-5xl text-white md:text-6xl">
        Find Your Interests
      </h2>
      <div className="grid-cols-2 justify-center text-center md:grid">
        <div className="rounded-2xl p-3">
          <select
            className="w-2/3 rounded-2xl border-4 border-black bg-gradient-to-r from-red-700 to-pink-800 p-3 
            text-center text-white hover:text-black md:text-2xl"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort-By:Default</option>
            <option value="name-asc">Sort By Name in ascending</option>
            <option value="name-desc">Sort By Name in descending</option>
          </select>
        </div>
        <div className="rounded-2xl p-3">
          <select
            className="w-2/3 rounded-2xl border-4 border-black bg-gradient-to-r from-red-700 to-pink-800 p-3 
            text-center text-white hover:text-black md:text-2xl"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="none">Filter-By:None</option>
            <option value="tech">Technical</option>
            <option value="cult">Cultural</option>
          </select>
        </div>
      </div>
      <ul className="flex h-auto flex-wrap items-center justify-center gap-8">
        {filteredItems.map((ele) => (
          <ClubList ele={ele} key={ele.id} />
        ))}
      </ul>
    </div>
  );
}
export default ListC;

function ClubList({ ele }) {
  return (
    <li>
      <div className="l-container mx-2 my-3 items-center rounded-xl p-0 text-center">
        <div className="l-card items-center rounded-xl">
          <div className="l-front rounded-xl">
            <img className="rounded-xl" src={ele.img_url} alt="clb-img" />
            <h3 className="text-2xl font-bold">{ele.name}</h3>
          </div>
          <div className="l-rear flex flex-col flex-wrap items-center rounded-xl bg-gradient-to-r from-red-700 to-pink-800 ">
            <h3 className="mb-0 pb-0 text-xl font-bold text-white">
              {ele.name}
            </h3>
            <div className="h1 mt-0   w-36 rounded-2xl border-b-4 border-purple-950 pt-0 md:mt-4"></div>
            <p className="text-white">{ele.desc}</p>
            <button className="h-15   my-5 rounded-2xl bg-purple-500  px-2 text-center text-3xl font-bold text-white shadow hover:shadow-lg hover:shadow-purple-500">
              Visit
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
