import React, { Fragment } from "react";
import Hero from "./Hero/Hero";
import LatestCollection from "./latest_collection/LatestCollection";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <LatestCollection />
    </Fragment>
  );
};

export default Home;
