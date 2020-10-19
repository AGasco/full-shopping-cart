import * as actions from "./../actions/cartActionCreators";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ITEM_ADDED:
      return { ...state, items: action.payload };
    case actions.ITEM_REMOVED:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
