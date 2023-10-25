import React from "react";
import "./RelatedProduct.css";
import data_product from "../assets/data";
import Item from "../item/Item";
const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
