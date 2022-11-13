import React from "react";
import Navbar from "../components/Navbar/index";
import Notice from "../components/Notice/index";
import Slider from "../components/Slider/index";
import Categories from "../components/Categories/index";

const Home = () => {
  return (
    <div>
      <Notice />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
