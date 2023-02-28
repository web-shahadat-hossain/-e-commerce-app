import React from "react";
import Exclude from "../../../Assets/images/Exclude.png";
import "./latest_collection.css";
import poster1 from "../../../Assets/images/poster-1.png";
import poster2 from "../../../Assets/images/poster-2.png";
import poster3 from "../../../Assets/images/poster-3.png";

const LatestCollection = () => {
  return (
    <section>
      <div className="container">
        <div className="latest_collection">
          <div className="latest_collection_head">
            <h4>New Arrival</h4>
            <img src={Exclude} alt="" />
          </div>
          <h2>Latest Collection</h2>
          <div className="latest_collection_container">
            <div>
              <div className="poster1 poster">
                <img src={poster1} alt="" />

                <h5>
                  2021 Trends <br /> Women’s Smart Skirt
                </h5>
              </div>
              <div className="poster1">
                <img src={poster2} alt="" />
                <h5>
                  2021 Trends <br /> Women’s Smart Skirt
                </h5>
              </div>
            </div>
            <div className="poster3">
              <img src={poster3} alt="" />

              <div>
                <h5>
                  2021 Trends <br /> Women’s Smart Skirt
                </h5>{" "}
                Discover More:
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
