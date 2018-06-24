import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showCart } from '../actions/cartActions';

class Navbar extends Component {
    render() {
        const items = this.props.cart.reduce((accumulator, item) => accumulator + (item.quantity),0);
        return (
            <div>
                <h1>My Shop</h1>
                <button onClick={() => this.props.showCart(this.props.cart)}>Total items: <strong>{items}</strong></button>
            </div>
        );    
    }
};

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, { showCart })(Navbar);