import { combineReducers } from 'redux';
import filtersReducer from './filters';
import productsReducer from './products';

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
});

export default rootReducer;