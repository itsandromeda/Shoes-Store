import { FETCH_SUCCESS } from '../actions/types';

const initialState = {
    products: []    
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_SUCCESS:
            console.log('SUCCESSSSSSSSSSSSSSSSSSSSSSS');
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}