export const PRODUCTS_FILTERED_BY_SIZE = "PRODUCTS_FILTERED_BY_SIZE";
export const PRODUCTS_SORTERED_BY = "PRODUCS_ORDERED_BY";

export const filterProductsBySize = (size) => {
  return { type: PRODUCTS_FILTERED_BY_SIZE, payload: size };
};

export const sortProductsBy = (sort) => {
  return { type: PRODUCTS_SORTERED_BY, payload: sort };
};
