import React from "react";
import useProducts from "../../../Hooks/useProducts";

const Footwear = () => {
  const [products] = useProducts("Footwear");
  return (
    <div className="products">
      {products.map((product, i) => (
        <div className="product" key={i}>
          <div>
            <img src={product.url} alt="" />
          </div>
          <div className="product_content">
            <h5>{product.title}</h5>
            <div>
              <h6>${product.price}</h6>
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
  );
};

export default Footwear;
