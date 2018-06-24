import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>My Shop</h1>
                <span>Total items: <strong>{}</strong></span>
            </div>
        ); 
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Navbar);