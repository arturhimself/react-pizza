const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (items) => items.reduce((sum, current) => (sum += current.price), 0);

const getActualProducts = (products) => Object.values(products).flatMap(item => item.items);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      const currentItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems),
        }
      };
      const actualProducts = getActualProducts(newItems);

      return {
        ...state,
        items: newItems,
        totalCount: actualProducts.length,
        totalPrice: getTotalPrice(actualProducts),
      }
    }
    case 'CLEAR_CART':
      return { 
        ...state, 
        items: {},
        totalCount: 0,
        totalPrice: 0,
      }
    case 'REMOVE_CART_ITEM': {
      // Filter product by id
      const newItems = Object.entries(state.items).filter(([key]) => Number(key) !== Number(action.payload));

      // Fill new items object
      const items = {};
      for (const [key, value] of newItems) {
        items[key] = value;
      }

      // Get products for calculate totals
      const actualProducts = getActualProducts(items);

      return {
        ...state,
        items,
        totalCount: actualProducts.length,
        totalPrice: getTotalPrice(actualProducts),
      }
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      const newStateItems = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      };

      // Get products for calculate totals
      const actualProducts = getActualProducts(newStateItems);

      return {
        ...state,
        items: newStateItems,
        totalCount: actualProducts.length,
        totalPrice: getTotalPrice(actualProducts),
      }
    }
    case 'PLUS_CART_ITEM': {
      const newItems = [
        ...state.items[action.payload].items, 
        state.items[action.payload].items[0],
      ];

      const newStateItems = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      };

      // Get products for calculate totals
      const actualProducts = getActualProducts(newStateItems);

      return {
        ...state,
        items: newStateItems,
        totalCount: actualProducts.length,
        totalPrice: getTotalPrice(actualProducts),
      }
    }
    default:
      return state;
  }
};

export default cart;
