import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import '../index.css';

class FilteredGrid extends Component {
    
    render() {  
        const filteredCatalog = this.props.products.filtered.map((products)=> (
            <div key={products.id} className="item">
                <div>
                    <img src={products.src} alt={products.name}/>
                    <h3 className="title">{products.name}</h3>
                    <div className="prod-desc">
                        <span>$ {products.price}</span>
                        <button className="add-btn" onClick={() => this.props.addToCart(products)} data-id={products.id}>ADD TO BAG</button>
                    </div>
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