import React, { useState } from "react";
import "./OurTopCollection.css";
import Exclude from "../../../Assets/images/Exclude.png";
import { Link, Outlet } from "react-router-dom";

const OurTopCollection = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="Our_Top_Collection_container">
      <div className="container">
        <div className="common_title">
          <div>
            <h4>COLLECTION</h4>
            <img src={Exclude} alt="" />
          </div>
          <h2>Our Top Collection</h2>
        </div>

        <div className="category_buttons">
          <Link to="/">
            <button
              onClick={() => setActive(1)}
              className={`${active === 1 && "category_button "}`}
            >
              Dresses
            </button>
          </Link>
          <Link to="/jewellery">
            <button
              className={`${active === 2 && "category_button "}`}
              onClick={() => setActive(2)}
            >
              Jewellery
            </button>
          </Link>

          <Link to="/accessories">
            <button
              className={`${active === 3 && "category_button "}`}
              onClick={() => setActive(3)}
            >
              Accessories
            </button>
          </Link>

          <Link to="/footwear">
            <button
              className={`${active === 4 && "category_button "}`}
              onClick={() => setActive(4)}
            >
              Footwear
            </button>
          </Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OurTopCollection;
