import { FETCH_SUCCESS } from '../actions/types';

const initialState = {
    products: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        break;
        default:
            return state;
    }
}