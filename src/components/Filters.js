import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCreepers, showBoots, showFlats, showAll } from '../actions/filterActions';

class Filters extends Component {
    render() {  
        return (
            <div>
                <span>Pick a filter: </span>
                <button onClick={() => this.props.showAll(this.props.products.prods)}>Show all types</button>
                <button onClick={() => this.props.showBoots(this.props.products.prods)}>Boots & Booties</button>
                <button onClick={() => this.props.showFlats(this.props.products.prods)}>Flats</button>
                <button onClick={() => this.props.showCreepers(this.props.products.prods)}>Creepers</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.productsGrid
});

export default connect(mapStateToProps, { showCreepers, showBoots, showFlats, showAll })(Filters);