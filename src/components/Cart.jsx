import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Fade from "react-reveal/Fade";
import formatCurrency from "./../util";
import "./../styles/Cart.css";

function Cart({ cartItems, removeFromCart, onCartProceed }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      const newTotal = cartItems.reduce(
        (total, curr) => total + curr.price * curr.count,
        0
      );
      setTotal(newTotal);
    } else setTotal(0);
  }, [cartItems]);

  const countItems = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  return (
    <div className="cart">
      <div className="cart__header">
        {cartItems.length === 0
          ? "Cart is empty"
          : `You have ${countItems()} item(s) in the cart`}
      </div>
      <div className="cart__items">
        {cartItems.map((item) => (
          <Fade key={item.title} right>
            {" "}
            <CartItem
              quantity={item.count}
              data={item}
              removeFromCart={removeFromCart}
            />
          </Fade>
        ))}
      </div>
      {cartItems.length !== 0 ? (
        <div className="cart__price">
          <p>{total ? `Total: ${formatCurrency(total)}` : "Total: $ 0"}</p>
          <button onClick={onCartProceed}>Proceed</button>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
