export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchProducts = (sortBy, category) => async (dispatch) => {
  dispatch(setLoaded(false));
  const categoryReq = category !== null ? `category=${category}` : '';
  const url = `http://localhost:3004/pizzas?${categoryReq}&_sort=${sortBy.type}&_order=${sortBy.order}`;
  const response = await fetch(url);
  const products = await response.json();
  dispatch(setProducts(products));
};

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});
