import React, { Fragment } from "react";
import Hero from "./Hero/Hero";
import LatestCollection from "./latest_collection/LatestCollection";
import LatestNews from "./Latest_News/LatestNews";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <LatestCollection />
      <LatestNews />
    </Fragment>
  );
};

export default Home;
