import React from "react";

function Topmost() {
    return (
      <div className="h-screen w-full">
        <img
          className="left-0 top-0 h-screen w-full object-cover bg-transparent"
          src="src\images\4B8FECFF-C1AC-404C-AD2A-04AC080829A0.JPG"
          alt="bit-im"
        ></img>
        <div className="absolute left-0 top-0 h-screen w-full bg-black/30"></div>
      </div>
    );
}
export default Topmost