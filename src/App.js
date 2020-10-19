//feature 1
import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Fade from "react-reveal/Fade";
import {
  addItemToCart,
  removeItemFromCart,
} from "./redux/actions/cartActionCreators";
import { connect } from "react-redux";
import "./App.css";

function App({ products, cartItems, addItemToCart, removeItemFromCart }) {
  const [showForm, setShowForm] = useState(false);
  const [order, setOrder] = useState({});

  const handleAddToCart = (product) => {
    const newCart = [...cartItems];
    let alreadyInCart = false;
    newCart.forEach((item) => {
      if (item._id === product._id) {
        console.log("We already have it");
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      newCart.push({ ...product, count: 1 });
    }

    addItemToCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const handleRemoveFromCart = (cartItem) => {
    const newCart = [...cartItems];
    newCart.map((item, index) => {
      if (item._id === cartItem._id) item.count--;
      if (item.count === 0) newCart.splice(index, 1);
    });

    removeItemFromCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const onCartProceed = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <div className="App__gridContainer">
        <header>
          <a href="/">React-Redux Full Shopping Cart</a>
        </header>
        <main>
          <div className="App__content">
            <div className="App__mainContent">
              <Filter />
              <Products addToCart={handleAddToCart} products={products} />
            </div>
            <div className="App__sidebar">
              <Cart
                removeFromCart={handleRemoveFromCart}
                cartItems={cartItems}
                onCartProceed={onCartProceed}
              />
              {showForm ? (
                <Fade right>
                  {" "}
                  <CheckoutForm cartItems={cartItems} setOrder={setOrder} />
                </Fade>
              ) : null}
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    cartItems: state.cart.items,
  };
};

const mapDispatchToProps = { addItemToCart, removeItemFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
