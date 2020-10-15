import React from "react";
import formatCurrency from "./../util.js";
import "./../styles/Product.css";

function Product({ data, addToCart, onImgClick }) {
  return (
    <div className="product">
      <a href={"#" + data._id}>
        <img src={data.image} alt={data.title} onClick={onImgClick} />
        <p className="product__title">{data.title}</p>
      </a>
      <div className="product__price">
        <div>{formatCurrency(data.price)}</div>
        <button onClick={() => addToCart(data)} className="button primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
