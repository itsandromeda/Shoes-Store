import { FETCH_SUCCESS } from './types';

export function fetchProducts() {
    return function(dispatch) {
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(products => dispatch({
            type: 'FETCH_SUCCESS',
            payload: products
          })
        );
    }
};
