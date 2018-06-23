import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {
        const catalog = this.props.products.map(products => (
            <div key={products.id}>
                <h3>{products.name}</h3>
                <img src={products.src} alt={products.name}/>
            </div>
        ));
        return (
            <div>
                <h2>Products list</h2>
                {catalog}
            </div>
        ); 
    }
}

const mapStateToProps = state => ({
    products: state.productsGrid.products
});

export default connect(mapStateToProps, { fetchProducts })(Products);