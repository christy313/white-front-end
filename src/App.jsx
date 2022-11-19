import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "../src/pages/Home";
import ProductList from "../src/pages/ProductsList";
import SingleProduct from "../src/pages/SingleProduct";
import Cart from "../src/pages/Cart";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart/" element={<Cart />} />

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
