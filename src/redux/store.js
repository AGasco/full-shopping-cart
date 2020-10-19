import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
