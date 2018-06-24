import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import { addToCart, removeFromCart, remove } from '../actions/cartActions';
import store from '../store';

const Cart = (props) => {
    
    const total = props.cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity) ,0);
    
    function sort(items) {
        return items.sort((a, b) => a.id < b.id)
    }
        
    const listedItems = sort(props.cart).map(item => (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td><button onClick={() => props.removeFromCart(item)}> - </button> {item.quantity} <button onClick={() => props.addToCart(item)}> + </button></td>
            <td><span onClick={() => props.remove(item)}>Delete from cart</span></td>
            <td>${item.price * item.quantity}</td>
        </tr>
    ));

    return (
            <div className="cart-product">
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th></th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { listedItems }
                </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total: ${total}</th>
                        </tr>
                    </tfoot>
                </table>
                <hr/>
            </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart, removeFromCart, remove })(Cart);