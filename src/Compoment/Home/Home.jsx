import React, { Fragment } from "react";
import Hero from "./Hero/Hero";
import LatestCollection from "./latest_collection/LatestCollection";
import LatestNews from "./Latest_News/LatestNews";
import OurStatistics from "./OurStatistics/OurStatistics";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <LatestCollection />
      <OurStatistics />
      <LatestNews />
    </Fragment>
  );
};

export default Home;
