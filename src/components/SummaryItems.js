import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, remove, hideCart } from '../actions/cartActions';
import '../index.css';

class SummaryItems extends Component {
    render() {
        const total = this.props.cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity) ,0);
        
        function sort(items) {
            return items.sort((a, b) => a.id < b.id)
        }

        const listedItems = sort(this.props.cart).map(item => (
            <div className="listed-item">
                <div>
                    <img src={item.src} alt={item.name} />
                </div>
                <div>
                    <h4>{item.name}</h4>
                    <div className="item-dtls">
                        <span>Qty: </span>
                        <button className="amount-btn" onClick={() => this.props.removeFromCart(item)}> - </button>
                        <span> {item.quantity} </span>
                        <button className="amount-btn" onClick={() => this.props.addToCart(item)}> + </button>
                    </div>
                    <p><i>${item.price * item.quantity}</i></p>
                    <span className="del" onClick={() => this.props.remove(item)}>Delete from cart</span>
                </div>
            </div>
        ));

        return (
            <div>
                {listedItems}
                <hr />
                <div className="checkout-bot">
                    <span><strong>Total: ${ total }</strong></span>
                </div>
            </div>
        );   
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart, removeFromCart, remove, hideCart })(SummaryItems);