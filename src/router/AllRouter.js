import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Compoment/Home/Home";
import Accessories from "../Compoment/Home/OurTopCollection/Accessories";
import Dresses from "../Compoment/Home/OurTopCollection/Dresses";
import Footwear from "../Compoment/Home/OurTopCollection/Footwear";
import Jewellery from "../Compoment/Home/OurTopCollection/Jewellery";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Dresses />} />
        <Route path="jewellery" element={<Jewellery />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="footwear" element={<Footwear />} />
      </Route>
    </Routes>
  );
};

export default AllRouter;
