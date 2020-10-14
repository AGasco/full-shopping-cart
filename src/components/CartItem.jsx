import React from "react";
import formatCurrency from "./../util";
import "./../styles/CartItem.css";

function CartItem({ quantity, data, removeFromCart }) {
  const renderPrice = () => {
    if (quantity === 1) return formatCurrency(data.price);
    else {
      return `${quantity} X ${formatCurrency(data.price)}`;
    }
  };
  return (
    <div className="cartItem">
      <div className="cartItem__left">
        {" "}
        <img src={data.image} alt={data.title} />
      </div>
      <div className="cartItem__right">
        <p className="cartItem__title">{data.title}</p>
        <div className="cartItem__price">
          <p>{renderPrice()}</p>
          <button onClick={() => removeFromCart(data)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
