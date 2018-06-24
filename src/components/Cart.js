import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, remove, hideCart } from '../actions/cartActions';

class Cart extends Component {
    render() {
        const total = this.props.cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity) ,0);
    
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

        return (
                <div className="cart-product">
                <button onClick={() => this.props.hideCart(this.props.cart)}>Seguir comprando</button>
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
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart, removeFromCart, remove, hideCart })(Cart);