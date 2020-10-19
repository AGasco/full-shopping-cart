import React, { useEffect } from "react";
import formatCurrency from "./../util";
import "./../styles/CartItem.css";

function CartItem({ quantity, item, removeFromCart }) {
  useEffect(() => {
    console.log("item", item);
  }, []);
  const renderPrice = () => {
    if (quantity === 1) return formatCurrency(item.price);
    else {
      return `${quantity} X ${formatCurrency(item.price)}`;
    }
  };
  return (
    <div className="cartItem">
      <div className="cartItem__left">
        {" "}
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cartItem__right">
        <p className="cartItem__title">{item.title}</p>
        <div className="cartItem__price">
          <p>{renderPrice()}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
