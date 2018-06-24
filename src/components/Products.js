import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

import Navbar from './Navbar';
import FilteredGrid from './FilteredGrid';
import Filters from './Filters';

class Products extends Component {
    
    render() {  
        const catalog = this.props.products.prods.map((products)=> (
            <div key={products.id} className="item">
                <div>
                    <img src={products.src} alt={products.name}/>
                    <h3 className="title">{products.name}</h3>
                    <span>$ {products.price}</span>
                    <button className="btn btn-outline-primary" onClick={() => this.props.addToCart(products)} data-id={products.id}>Add to cart</button>
                </div>
            </div>
        ));
        
        return (
            <div>
                <Navbar />
                <Filters />
                {this.props.products.viewFilters ? <FilteredGrid /> : catalog}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid,
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart })(Products);