import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>

        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>

      <div className="deescriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of prouducts or services over the internet serves as a virtual
          marketplace where businesses and individual showcase thier products,
          interact with customers, and conduce transactions without the need for
          a pysical presence, E-comerce website havegained immense popularity
          due to their conventional accessiability, and the global reach they
          offer.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
