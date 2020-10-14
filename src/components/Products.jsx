import React from "react";
import Product from "./Product";
import "./../styles/Products.css";

function Products({ products, addToCart }) {
  return (
    <div className="products">
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Product addToCart={addToCart} data={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
