import React, { useState, useEffect } from "react";
import Product from "./Product";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import "./../styles/Products.css";
import ProductModal from "./ProductModal";

function Products({ products, addToCart }) {
  const [currProduct, setCurrProduct] = useState(null);

  const openModal = (product) => {
    setCurrProduct(product);
    console.log("opening modal for", product);
  };

  const closeModal = () => {
    setCurrProduct(null);
  };

  return (
    <div className="products">
      <Fade bottom cascade>
        <ul>
          {products?.map((product) => (
            <li key={product._id}>
              {" "}
              <Product
                addToCart={addToCart}
                data={product}
                onImgClick={() => openModal(product)}
              />
            </li>
          ))}
        </ul>
      </Fade>
      {currProduct && (
        <ProductModal
          product={currProduct}
          closeModal={closeModal}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default Products;
// export default connect(null, null)(Products);
