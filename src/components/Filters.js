import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCreepers, showBoots, showFlats, showAll } from '../actions/filterActions';
import '../index.css';

class Filters extends Component {
    render() {  
        return (
            <div className="filter-container">
                <div>
                    <button onClick={() => this.props.showAll(this.props.products.prods)}>SHOW ALL</button>
                    <button onClick={() => this.props.showBoots(this.props.products.prods)}>BOOTS</button>
                    <button onClick={() => this.props.showFlats(this.props.products.prods)}>FLATS</button>
                    <button onClick={() => this.props.showCreepers(this.props.products.prods)}>CREEPERS</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid
});

export default connect(mapStateToProps, { showCreepers, showBoots, showFlats, showAll })(Filters);