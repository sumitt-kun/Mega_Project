import React from "react";
import clubdetail from "../clubdetails";

function Dashmain(){
    return( 
        <div className="md:grid md:grid-cols-4 bg-[url('/static/images/dashbg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
            {clubdetail.map((ele)=>(    
            <ClubList ele={ele} key={ele.id}/> 
            ))}
        </div>
    )
}
function ClubList({ ele }) {
    return (
        <div className="m-auto l-container my-4 items-center rounded-xl p-0 text-center">
          <div className="l-card items-center rounded-xl">
            <div className="l-front rounded-xl">
              <img
                loading="lazy"
                className="rounded-xl m-auto"
                src={ele.img_url}
                alt="clb-img"
              />
            </div>
            <div className="l-rear flex flex-col flex-wrap items-center rounded-xl bg-gradient-to-r from-red-700 to-pink-800 ">
              <h3 className="mb-0 pb-0 text-xl font-bold text-white">
                {ele.name}
              </h3>
              <div className="h1 mt-0 w-36 rounded-2xl border-b-4 border-purple-950 pt-0 md:mt-4"></div>
              <p className="text-white">{ele.desc}</p>
              <button className="h-15   my-5 rounded-2xl bg-purple-500  px-2 text-center text-3xl font-bold text-white shadow hover:shadow-lg hover:shadow-purple-500">
                Visit
              </button>
            </div>
          </div>
        </div>
    );
  }

export default Dashmain;