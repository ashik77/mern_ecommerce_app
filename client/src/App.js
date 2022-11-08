import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const loggedUser = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/success" element={<Success />} />

        <Route
          path="/register"
          element={loggedUser ? <Home /> : <Register />}
        />

        <Route path="/login" element={loggedUser ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
