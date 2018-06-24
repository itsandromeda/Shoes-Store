import { ADD_ITEM, REMOVE_ITEM, REMOVE } from './types';
import store from '../store';

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