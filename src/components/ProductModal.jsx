import React from "react";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import formatCurrency from "./../util";
import "./../styles/ProductModal.css";

function ProductModal({ product, closeModal, addToCart }) {
  return (
    <Modal className="productModal" isOpen={product !== null}>
      <Zoom>
        <div className="productModal__left">
          <img
            className="productModal__img"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="productModal__right">
          <button className="productModal__closeBtn" onClick={closeModal}>
            X
          </button>
          <h3 className="productModal__title">{product.title}</h3>
          <p className="productModal__description">{product.description}</p>
          <div className="productModal__sizes">
            <p>Available Sizes: </p>
            {product.availableSizes.map((size) => (
              <p className="productModal__size">{size}</p>
            ))}
          </div>
          <div className="productModal__price">
            <p>{formatCurrency(product.price)}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </Zoom>
    </Modal>
  );
}

export default ProductModal;
