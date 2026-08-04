import React from "react";
import "../App.css";

const ProductCard = ({ image, title }) => {
  return (
    <>
      <div className="product-card">
        <img src={image} alt={title} className="product-image"></img>
        <span>{title}</span>
      </div>
    </>
  );
};

export default ProductCard;
