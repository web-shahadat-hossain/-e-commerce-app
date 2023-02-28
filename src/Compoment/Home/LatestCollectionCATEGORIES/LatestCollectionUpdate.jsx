import React, { useEffect, useState } from "react";
import "./latest-collection.css";
import Exclude from "../../../Assets/images/Exclude.png";

const LatestCollectionUpdate = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((json) => setProducts(json.products));
  }, []);
  return (
    <section className="latest_collection_update_container">
      <div className="container">
        <div className="common_title">
          <div>
            <h4>STATS</h4>
            <img src={Exclude} alt="" />
          </div>
          <h2>Our Statistics</h2>
        </div>
        <div className="latest_collection_update_container_card">
          {products.slice(0, 8).map((product, i) => (
            <div
              className="latest_collection_update_container_card_products"
              key={i}
            >
              <div className="latest_collection_update_container_card_products_img">
                <img src={product.url} alt="" />
              </div>
              <div className="latest_collection_update_container_card_products_content">
                <div>
                  <h4>{product.title}</h4>
                </div>
                <div className="latest_collection_update_container_card_products_content_box">
                  <h6>$80</h6>
                  <div>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCollectionUpdate;
