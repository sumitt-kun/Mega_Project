import React from "react";
const clubdetail = [
  {
    id: 1,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Association of Computer Machinery",
    desc: "Best coding club",
  },
  {
    id: 2,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Entrepreneurship Development Cell",
    desc: "Innovation and Startup Club",
  },
  {
    id: 3,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Environment Protection and Awareness Club ",
    desc: "Environment and Pollution spread control club",
  },
  {
    id: 4,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Institute of Electrical and Electronics Engineers",
    desc: "Best coding club of BIT.",
  },
  {
    id: 5,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "The Institution of Engineering and Technology",
    desc: "Best coding club of BIT.",
  },
  {
    id: 6,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "The Institution of Electronics and Telecommunication Engineers",
    desc: "Best coding club of BIT.",
  },
  {
    id: 7,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Robolution",
    desc: "Best coding club of BIT.",
  },
  {
    id: 8,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Society of Automotive Engineers",
    desc: "Best coding club of BIT.",
  },
  {
    id: 9,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Team Firebolt Racing",
    desc: "Best coding club of BIT.",
  },
  {
    id: 10,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Team Srijan",
    desc: "Best coding club of BIT.",
  },
  {
    id: 11,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Team Aveon Racing",
    desc: "Best coding club of BIT.",
  },
  {
    id: 12,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Society for Industrial Management and Engineering",
    desc: "Best coding club of BIT.",
  },
  {
    id: 13,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Finance Club",
    desc: "Best coding club of BIT.",
  },
  {
    id: 14,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Aerospace Society",
    desc: "Best coding club of BIT.",
  },
  {
    id: 15,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Indian Institute of Chemical Engineers",
    desc: "Best coding club of BIT.",
  },
  {
    id: 16,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Dance Club",
    desc: "Best coding club of BIT.",
  },
  {
    id: 17,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Dramatics Society",
    desc: "Best coding club of BIT.",
  },
  {
    id: 18,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Fine Arts Society",
    desc: "Best coding club of BIT.",
  },
  {
    id: 19,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Leo Club",
    desc: "Best coding club of BIT.",
  },
  {
    id: 20,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Literary Society",
    desc: "Best coding club of BIT.",
  },
  {
    id: 21,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Music Club",
    desc: "Best coding club of BIT.",
  },
  {
    id: 22,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "News and publication Society",
    desc: "Best coding club of BIT.",
  },
  {
    id: 23,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Photographic Society",
    desc: "Best coding club of BIT.",
  },
  {
    id: 24,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Rotaract Club",
    desc: "Best coding club of BIT.",
  },
  {
    id: 25,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Sports and Adventure Club",
    desc: "Best coding club of BIT.",
  },
  {
    id: 26,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "UNESQUO",
    desc: "Best coding club of BIT.",
  },
  {
    id: 26,
    img_url: "./src/images/IEEE-symbol.jpg",
    name: "Unnat Bharat Abhiyan",
    desc: "Best coding club of BIT.",
  },
];

function ListC() {
  return (
    <>
      <h2 className="text-bold my-3 mb-6 text-center text-3xl font-bold">
        List of Clubs of BIT Mesra
      </h2>
      <ul className=" m-2 flex h-auto flex-wrap items-center justify-center gap-8">
        {clubdetail.map((ele) => (
          <ClubList ele={ele} key={ele.id} />
        ))}
      </ul>
    </>
  );
}
export default ListC;

function ClubList({ ele }) {
  return (
    <li>
      <div className="l-container mx-2 my-3 items-center rounded-xl p-0 text-center">
        <div className="l-card items-center rounded-xl">
          <div className="l-front rounded-xl">
            <img className="rounded-xl" src={ele.img_url} alt="an image" />
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
