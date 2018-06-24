import { ADD_ITEM, REMOVE_ITEM, REMOVE } from '../actions/types';

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    
   if (cartItem === undefined) {
       return [ ...cartWithoutItem(cart, item), { ...item, quantity: 1}]
   }
    
    return [ ...cartWithoutItem(cart, item),
            { ...cartItem, quantity: cartItem.quantity + 1}]
};

const removeFromCart = (cart, item) => {
    if (item.quantity >= 1) {
        return [ ...cartWithoutItem(cart, item),
                { ...item, quantity: item.quantity - 1}]        
    } 
    
    return [ ...cartWithoutItem(cart, item),
                { ...item, quantity: item.quantity}]
};

export default function cartReducer(state = [], action) {
    switch(action.type) {
        case ADD_ITEM:
            return addToCart(state, action.payload)
        break;
        case REMOVE_ITEM:
            return removeFromCart(state, action.payload);
        break;
        case REMOVE:
            const firstMatchIndex = state.indexOf(action.payload);
            return state.filter((item, index) => index !== firstMatchIndex);
        break;
        default:
            return state;
    }
}