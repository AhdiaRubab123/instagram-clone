import React from "react";
import Navbar from "./Navbar";
import StatusBar from "./StatusBar";
import Postfeed from "./Postfeed";
import Suggesteduser from "./Suggesteduser";

const Home = () => {
  return (
    <div className=" d-flex">
      <Navbar />
      <div>
        <StatusBar />
        <Postfeed username="demo__" />
        <Postfeed username="demo1" />
        <Postfeed username="demo2" />
        <Postfeed username="demo3" />
      </div>
      <Suggesteduser />
    </div>
  );
};

export default Home;
