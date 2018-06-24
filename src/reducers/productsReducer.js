import { FETCH_SUCCESS, SHOW_CREEPERS, SHOW_FLATS, SHOW_BOOTS, SHOW_ALL } from '../actions/types';
import { combineReducers } from 'redux';

const initialState = {
    prods: [],
    filtered: [],
    viewFilters: false
};

function getProducts(state = initialState, action) {
    switch(action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                prods: action.payload,
                filtered: action.payload
            }
        break;
        case SHOW_CREEPERS:
            return showCreepers(state, action.payload);
            break;
        case SHOW_FLATS:
            return showFlats(state, action.payload);
            break;
        case SHOW_BOOTS:
            return showBoots(state, action.payload);
            break;
        case SHOW_ALL:
            return {
                ...state,
                filtered: action.payload,
                viewFilters: false
            };
            break;
        default:
            return state;
    }
}

function showCreepers(state, items) {
    const creepers = items.filter(item => item.type === 'CREEPERS');
    return { ...state, filtered: creepers, viewFilters: true };
}

function showFlats(state, items) {
    const flats = items.filter(item => item.type === 'FLATS');
    return { ...state, filtered: flats, viewFilters: true };
}

function showBoots(state, items) {
    const boots = items.filter(item => item.type === 'BOOTS & BOOTIES');
    return { ...state, filtered: boots, viewFilters: true };
}

export default getProducts;