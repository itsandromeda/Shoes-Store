import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showAll, showCreepers} from '../actions/filterActions';
import { addToCart } from '../actions/cartActions';

class FilteredGrid extends Component {
    
    render() {  
        const filteredCatalog = this.props.products.filtered.map((products)=> (
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
                {filteredCatalog}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid
});

export default connect(mapStateToProps, {addToCart})(FilteredGrid);