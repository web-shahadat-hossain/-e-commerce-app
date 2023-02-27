import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Compoment/Home/Home";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRouter;
