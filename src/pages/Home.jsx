import React from "react";
import Navbar from "../components/navbar/navbar.component";
import Notice from "../components/notice/notice.component";
import Slider from "../components/slider/slider.component";
import Categories from "../components/categories/categories.component";

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
