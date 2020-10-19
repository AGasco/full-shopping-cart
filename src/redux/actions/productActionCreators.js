export const PRODUCT_ADDED = "PRODUCT_ADDED";
export const PRODUCT_REMOVED = "PRODUCT_REMOVED";
export const PRODUCTS_FILTERED_BY_SIZE = "PRODUCTS_FILTERED_BY_SIZE";
export const PRODUCTS_SORTERED_BY = "PRODUCS_ORDERED_BY";

export const addProduct = (product) => {
  return { type: PRODUCT_ADDED, payload: product };
};

export const removeProduct = (id) => {
  return { type: PRODUCT_REMOVED, payload: id };
};

export const filterProductsBySize = (size) => {
  return { type: PRODUCTS_FILTERED_BY_SIZE, payload: size };
};

export const sortProductsBy = (sort) => {
  return { type: PRODUCTS_SORTERED_BY, payload: sort };
};
