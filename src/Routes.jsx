import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Login from "./views/login/Login";

const RoutesComponent = (props) => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesComponent;
