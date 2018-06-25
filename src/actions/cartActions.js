import { ADD_ITEM, REMOVE_ITEM, REMOVE, SHOW_CART, HIDE_CART, EMPTY_CART } from './types';

export const addToCart = (item) => dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: item
    });
};

export const removeFromCart = (item) => dispatch => {
    dispatch({
        type: REMOVE_ITEM,
        payload: item
    });
};

export const remove = (item) => dispatch => {
    dispatch({
        type: REMOVE,
        payload: item
    });
};

export const emptyCart = (item) => dispatch => {
    dispatch({
        type: EMPTY_CART,
        payload: item
    });
};

export const showCart = (item) => dispatch => {
    dispatch({
        type: SHOW_CART,
        payload: item
    });
};

export const hideCart = (item) => dispatch => {
    dispatch({
        type: HIDE_CART,
        payload: item
    });
};
