import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import '../index.css';

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
                    <div className="prod-desc">
                        <span>$ {products.price.toFixed(2)}</span>
                        <button className="add-btn" onClick={() => this.props.addToCart(products)} data-id={products.id}>ADD TO BAG</button>
                    </div>
                </div>
            </div>
        ));
        
        return (
            <div>
                <Navbar />
                <Filters />
                <div className="wrapper">
                {this.props.products.viewFilters ? <FilteredGrid /> : catalog}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid,
    cart: state.cart
});

export default connect(mapStateToProps, { addToCart })(Products);