//feature 1
import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import data from "./data.json";
import "./App.css";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState([
    ...JSON.parse(localStorage.getItem("cartItems")),
  ]);
  const [showForm, setShowForm] = useState(false);
  const [order, setOrder] = useState({});

  useEffect(() => {
    console.log("order", order);
  }, [order]);

  const filterProducts = (e) => {
    const size = e.target.value;
    if (size === "ALL") setProducts(data.products);
    else {
      setSize(size);
      const newProducts = data.products.filter((product) =>
        product.availableSizes.includes(size)
      );
      setProducts(newProducts);
    }
  };
  const sortProducts = (e) => {
    const sort = e.target.value;
    if (sort === "latest") {
      products.sort((a, b) => b.id - a.id);
    } else if (sort === "lowest") {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === "highest") {
      products.sort((a, b) => b.price - a.price);
    } else {
      console.warn("Wrong input in sortProducts()");
    }
    setSort(e.target.value);
  };

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
              <Filter
                count={products.length}
                size={size}
                sort={sort}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
              />
              <Products addToCart={addToCart} products={products} />
            </div>
            <div className="App__sidebar">
              <Cart
                removeFromCart={removeFromCart}
                cartItems={cartItems}
                onCartProceed={onCartProceed}
              />
              {showForm ? (
                <CheckoutForm cartItems={cartItems} setOrder={setOrder} />
              ) : null}
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    </div>
  );
}

export default App;
