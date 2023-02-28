import React from "react";
import "./our_statistics.css";
import Exclude from "../../../Assets/images/Exclude.png";

const OurStatistics = () => {
  return (
    <section className="our_statistics">
      <div className="container">
        <div className="common_title">
          <div>
            <h4>STATS</h4>
            <img src={Exclude} alt="" />
          </div>
          <h2>Our Statistics</h2>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default OurStatistics;
