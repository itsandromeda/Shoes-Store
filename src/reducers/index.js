import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    productsGrid: productsReducer,
    cart: cartReducer
});