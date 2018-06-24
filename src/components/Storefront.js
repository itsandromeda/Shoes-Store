import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';

import Cart from './Cart';
import Products from './Products';

class Storefront extends Component {
    componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchProducts());
    }
    
    render() {        
		return (
			<div className="shop-container">
                {this.props.products.viewCart ? <Cart products={this.props.products} /> : <Products />}
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid,
    cart: state.cart
});

export default connect(mapStateToProps)(Storefront);