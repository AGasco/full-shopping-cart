import * as actions from "../actions/productActionCreators";
import data from "./../../data.json";

const initialState = {
  originalProducts: data.products,
  products: data.products,
  size: "ALL",
  orderBy: "Latest",
};

const productsReducer = (state = initialState, action) => {
  let products = [];
  switch (action.type) {
    case actions.PRODUCT_ADDED:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actions.PRODUCT_REMOVED:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case actions.PRODUCTS_FILTERED_BY_SIZE:
      if (action.payload === "ALL") products = initialState.originalProducts;
      else
        products = initialState.originalProducts.filter((product) =>
          product.availableSizes.includes(action.payload)
        );
      return {
        ...state,
        products: products,
        size: action.payload,
      };
    case actions.PRODUCTS_SORTERED_BY:
      products = [...state.products];
      const sort = action.payload;
      if (sort === "latest") {
        products.sort((a, b) => b.id - a.id);
      } else if (sort === "lowest") {
        products.sort((a, b) => a.price - b.price);
      } else if (sort === "highest") {
        products.sort((a, b) => b.price - a.price);
      } else {
        console.warn("Wrong input in sortProducts()");
      }
      return {
        ...state,
        products: products,
        orderBy: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
