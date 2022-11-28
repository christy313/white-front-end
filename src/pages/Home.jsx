import React from "react";
import Navbar from "../components/Navbar/index";
// import Notice from "../components/Notice/index";
// import Slider from "../components/Slider/index";
import Categories from "../components/Categories/index";
import Products from "../components/Products/index";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* <Notice /> */}
      <Navbar />
      {/* <Slider /> */}
      <Categories />
      <Products />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Home;
