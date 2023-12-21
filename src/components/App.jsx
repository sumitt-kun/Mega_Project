import React from "react";
import Showcase from "./Showcase";
import Navbar from "./Navbar";
import Topmost from "./Topmost";
import ListC from "./ListC";
import Meetdev from "./Meet-devs";
import Footer from "./Footer";
import Bgdiv from "./bgdiv";
function App() {
  return (
    <div>
      <Navbar />
      <Topmost />
      <Showcase />
      <Bgdiv />
      <ListC />
      <Meetdev />
      <Footer />
    </div>
  );
}
export default App;
