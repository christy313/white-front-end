import React from "react";
import Navbar from "../components/Navbar";
import Notice from "../components/notice/notice.component";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

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
