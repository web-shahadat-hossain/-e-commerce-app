import { useEffect, useState } from "react";

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((json) => {
        const categoryProduct = json.products.filter(
          (product) => product.category === category
        );
        setProducts(categoryProduct);
      });
  }, [category]);

  return [products, setProducts];
};

export default useProducts;
