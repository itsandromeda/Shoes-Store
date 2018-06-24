import { FETCH_SUCCESS, SHOW_CREEPERS, SHOW_FLATS, SHOW_BOOTS, SHOW_ALL, SHOW_CART, HIDE_CART } from '../actions/types';

const initialState = {
    prods: [],
    filtered: [],
    viewFilters: false,
    viewCart: false
};

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
        case SHOW_CART:
            return {
                ...state,
                viewCart: true
            };
            break;
        case HIDE_CART:
            return {
                ...state,
                viewCart: false
            };
            break;
        default:
            return state;
    }
}

export default getProducts;