//feature 1
import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import "./App.css";

function App({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [order, setOrder] = useState({});

  useEffect(() => {
    if (products && localStorage.getItem("cartItems"))
      setCartItems([...JSON.parse(localStorage.getItem("cartItems"))]);
  }, []);

  const addToCart = (product) => {
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

    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const removeFromCart = (cartItem) => {
    const newCart = [...cartItems];
    newCart.map((item, index) => {
      if (item._id === cartItem._id) item.count--;
      if (item.count === 0) newCart.splice(index, 1);
    });

    setCartItems(newCart);
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
              <Products addToCart={addToCart} products={products} />
            </div>
            <div className="App__sidebar">
              <Cart
                removeFromCart={removeFromCart}
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
  };
};

export default connect(mapStateToProps, null)(App);
