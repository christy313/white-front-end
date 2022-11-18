import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import ProductList from "../src/pages/ProductsList";
import SingleProduct from "../src/pages/SingleProduct";
import Cart from "../src/pages/Cart";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/cart/" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
