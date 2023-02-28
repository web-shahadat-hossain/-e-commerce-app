import React from "react";
import { latestNews } from "../../../common/data/data";
import Exclude from "../../../Assets/images/Exclude.png";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <section className="container LatestNews_container">
      <div className="common_title">
        <div>
          <h4>BLOGS</h4>
          <img src={Exclude} alt="" />
        </div>
        <h2>Latest News</h2>
      </div>

      <div className="LatestNews">
        {latestNews?.map((data, index) => (
          <article key={index}>
            <img src={data.img} alt="" />
            <div>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
              <h6>{data.date}</h6>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
