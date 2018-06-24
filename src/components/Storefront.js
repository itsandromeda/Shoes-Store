import React, { Component } from 'react';
import { FETCH_SUCCESS } from '../actions/types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import { addToCart} from '../actions/cartActions';
import { showCreepers } from '../actions/filterActions';

import Cart from './Cart';
import Filters from './Filters';
import FilteredGrid from './FilteredGrid';
import Products from './Products';
import Navbar from './Navbar';

class Storefront extends Component {
    componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchProducts());
    }
    
    render() {        
		return (
			<div className="shop-container">
                <Navbar cart={this.props.cart}/>
                <Cart products={this.props.products} />
                <Filters />
                {this.props.products.viewFilters ? <FilteredGrid /> : <Products />}
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid,
    cart: state.cart,
    filteredItems: state.filter
});

export default connect(mapStateToProps)(Storefront);