import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import '../index.css';

import Cart from './Cart';
import Products from './Products';
import Footer from './Footer';

class Storefront extends Component {
    componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchProducts());
    }
    
    render() {        
		return (
			<div className="container">
                {this.props.products.viewCart ? <Cart products={this.props.products} /> : <Products />}
                <Footer />
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid,
    cart: state.cart
});

export default connect(mapStateToProps)(Storefront);