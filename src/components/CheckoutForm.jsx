import React, { useState } from "react";
import "./../styles/CheckoutForm.css";

const initialInput = { email: "", name: "", address: "" };

function CheckoutForm({ cartItems, setOrder }) {
  const [input, setInput] = useState(initialInput);

  const onInputChange = (e) => {
    const name = e.target.name;
    setInput({ ...input, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInput(initialInput);
    const order = {
      name: input.name,
      email: input.email,
      address: input.address,
      cartItems: cartItems,
    };
    setOrder(order);
  };

  return (
    <form onSubmit={onSubmit} className="checkoutForm">
      <div className="checkoutForm__email">
        {" "}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={onInputChange}
        />
      </div>
      <div className="checkoutForm__name">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={onInputChange}
        />
      </div>
      <div className="checkoutForm__address">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={input.address}
          onChange={onInputChange}
        />
      </div>
      <input
        className="checkoutForm__button"
        type="submit"
        value="Check-out"
        onChange={onInputChange}
      />
    </form>
  );
}

export default CheckoutForm;
