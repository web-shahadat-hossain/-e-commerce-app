import React from "react";
import "./our_statistics.css";
import Exclude from "../../../Assets/images/Exclude.png";
import { ourStatistics } from "../../../common/data/data";

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
        <div className="our_statistics_grid">
          {ourStatistics?.map((data, index) => (
            <div key={index}>
              <div
                className={
                  data.id === 1
                    ? "our_statistics_icons1"
                    : "our_statistics_icons"
                }
              >
                <img src={data.icons} alt="" />
              </div>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStatistics;
