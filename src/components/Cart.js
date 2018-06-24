import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import { addToCart, removeFromCart, remove } from '../actions/cartActions';
import store from '../store';

class Cart extends Component {
    render() {        
        function sort(items) {
            return items.sort((a, b) => a.id < b.id)
        }
        
        const listedItems = sort(this.props.cart).map(item => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td><button onClick={() => this.props.removeFromCart(item)}> - </button> {item.quantity} <button onClick={() => this.props.addToCart(item)}> + </button></td>
                <td><span onClick={() => this.props.remove(item)}>Delete from cart</span></td>
                <td>${item.price * item.quantity}</td>
            </tr>
        ));
        
const reducer = (accumulator, currentValue) => accumulator + currentValue;
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
                                <th>Total: ${}</th>
                            </tr>
                        </tfoot>
                    </table>
                    <hr/>
                </div>
        ); 
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart, removeFromCart, remove })(Cart);