import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import { addToCart } from '../actions/cartActions';
import store from '../store';

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {
        const catalog = this.props.products.map((products, itemInCart)=> (
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
                <h2>Products</h2>
                {catalog}
            </div>
        );
    }
}

Products.propTypes = {
    fetchProducts: Proptypes.func.isRequired,
    products: Proptypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    products: state.productsGrid.products,
    cart: state.cart
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);