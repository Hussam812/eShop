import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../components/breadCrums/BreadCrums";
import ProudctDisplay from "../components/productDisplay/ProudctDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const proudct = all_product.find((e) => e.id === Number(productId));
  //console.log(proudct);

  return (
    <div>
      <BreadCrums product={proudct} />
      <ProudctDisplay product={proudct} />
    </div>
  );
};

export default Product;
