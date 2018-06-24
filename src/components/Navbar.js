import React, { Component } from 'react';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const items = props.cart.reduce((accumulator, item) => accumulator + (item.quantity),0);
    
    return (
        <div>
            <h1>My Shop</h1>
            <span>Total items: <strong>{items}</strong></span>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Navbar);