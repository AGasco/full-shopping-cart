//feature 1
import React, { useState } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import data from "./data.json";
import "./App.css";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

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
