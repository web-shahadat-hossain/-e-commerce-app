import React from "react";
import "./hero.css";
import cart from "../../../Assets/images/woman-in-cart.png";

const Hero = () => {
  return (
    <div>
      <div class="hero">
        <div class="row container d-flex">
          <div class="col">
            <span class="subtitle">Limited Time Only For Winter</span>
            <h1>
              fash<span class="i">i</span>on
            </h1>
            <p>LOOK YOUR BEST ON YOUR BEST DAY</p>

            <button class="btn">Explore Now!</button>
          </div>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
