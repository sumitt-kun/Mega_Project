import React from "react";
import Showcase from "./Showcase";
import Navbar from "./Navbar";
import Topmost from "./Topmost";
import ListC from "./ListC";
import Meetdev from "./Meet-devs";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Topmost />
      <Showcase />
      <ListC />
      <Meetdev />
      <Footer />
    </div>
  );
}
