import React, { useEffect, useState } from "react";
import "./latest-collection.css";
import Exclude from "../../../Assets/images/Exclude.png";

const LatestCollectionUpdate = () => {
  const [products, setProducts] = useState([]);
  const [explore, setExplore] = useState(8);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((json) => setProducts(json.products));
  }, []);
  console.log(explore);
  return (
    <section className="latest_collection_update_container">
      <div className="container">
        <div className="common_title">
          <div>
            <h4>CATEGORIES</h4>
            <img src={Exclude} alt="" />
          </div>
          <h2>2023 Latest Collection</h2>
        </div>
        <div className="latest_collection_update_container_card">
          {products.slice(0, explore).map((product, i) => (
            <div
              className="latest_collection_update_container_card_products"
              key={i}
            >
              <div
                className={`latest_collection_update_container_card_products_img ${
                  product.id === 3 &&
                  "latest_collection_update_container_card_products_img3 "
                }`}
              >
                <img src={product.url} alt="" />
                {product.id === 3 ? (
                  <img className="icon" src={product.icon} alt="" />
                ) : (
                  ""
                )}
              </div>
              <div className="latest_collection_update_container_card_products_content">
                <div>
                  <h4>{product.title}</h4>
                </div>
                <div className="latest_collection_update_container_card_products_content_box">
                  <h6>$80</h6>
                  <div>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setExplore(products.length)} className="btn">
          Explore Now!
        </button>
      </div>
    </section>
  );
};

export default LatestCollectionUpdate;
