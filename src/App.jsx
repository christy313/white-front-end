import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../src/pages/Home";
import ProductList from "../src/pages/ProductsList";
import SingleProduct from "../src/pages/SingleProduct";
import Cart from "../src/pages/Cart";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Success from "../src/pages/Success";
import Cancel from "../src/pages/Cancel";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
