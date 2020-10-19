export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "ITEM_REMOVED";

export const addItemToCart = (cartItems) => {
  return { type: ITEM_ADDED, payload: cartItems };
};

export const removeItemFromCart = (cartItems) => {
  return { type: ITEM_REMOVED, payload: cartItems };
};
