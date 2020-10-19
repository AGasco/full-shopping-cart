import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";

const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
