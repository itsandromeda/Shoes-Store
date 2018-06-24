import { SHOW_ALL, SHOW_BOOTS, SHOW_CREEPERS, SHOW_FLATS } from './types';
import store from '../store';

export const showAll = (items) => dispatch => {
    dispatch({
        type: SHOW_ALL,
        payload: items
      });
};

export const showCreepers = (items) => dispatch => {
    dispatch({
        type: SHOW_CREEPERS,
        payload: items
      });
};

export const showFlats = (items) => dispatch => {
    dispatch({
        type: SHOW_FLATS,
        payload: items
      });
};

export const showBoots = (items) => dispatch => {
    dispatch({
        type: SHOW_BOOTS,
        payload: items
      });
};