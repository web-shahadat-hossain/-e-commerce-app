import React from "react";
import "./hero.css";
import cart from "../../../Assets/images/woman-in-cart.png";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="row container hero_container ">
          <div className="col">
            <span className="subtitle">Limited Time Only For Winter</span>
            <h1>
              fash<span className="i">i</span>on
            </h1>
            <p>LOOK YOUR BEST ON YOUR BEST DAY</p>

            <button className="btn">Explore Now!</button>
          </div>
          <div className="hero-img">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
