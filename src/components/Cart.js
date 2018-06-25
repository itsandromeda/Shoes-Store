import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, remove, hideCart } from '../actions/cartActions';

import SummaryItems from './SummaryItems';
import EmptyCart from './EmptyCart';

import '../index.css';

class Cart extends Component {
    render() {

        return (
                <div className="cart-wrapper">
                    <nav className="nav">
                        <div>
                            <div className="logo">
                                <img onClick={() => this.props.hideCart(this.props.cart)} src="https://raw.githubusercontent.com/itsandromeda/Shoes-Store/master/src/img/store_logo.png" alt="Dollskill logo" />
                            </div>
                        </div>
                    </nav>
                    <div>
                        <button className="back-btn" onClick={() => this.props.hideCart(this.props.cart)}> ← Keep shopping</button>
                        <div>
                            <div className="checkout-container">
                                <h3>ACCOUNT</h3>
                                <div className="action-btns">
                                    <button className="account-btn">CREATE AN ACCOUNT</button>
                                    <button className="fb-btn">LOGIN WITH FACEBOOK</button>
                                </div>
                            </div>
                            <div className="checkout-container">
                                { this.props.cart.length === 0 ? <EmptyCart /> : <SummaryItems />}
                            </div>
                        </div>
                    </div>
                </div>
                    
        );   
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart, removeFromCart, remove, hideCart })(Cart);