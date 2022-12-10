import React from "react";
import Navbar from "../components/Navbar/index";
import Categories from "../components/Categories/index";
import Products from "../components/Products/index";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Navbar />
    <Categories />
    <Products />
    <Footer />
  </>
);

export default Home;
