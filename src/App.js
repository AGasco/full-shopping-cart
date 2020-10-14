//feature 1
import React, { useState } from "react";
import data from "./data.json";
import "./App.css";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="App">
      <div className="App__gridContainer">
        <header>
          <a href="/">React-Redux Full Shopping Cart</a>
        </header>
        <main>
          <div className="App__content">
            <div className="App__mainContent">
              <Products products={products} />
            </div>
            <div className="App__sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    </div>
  );
}

export default App;
