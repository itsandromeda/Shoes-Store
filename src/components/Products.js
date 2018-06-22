import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    
    componentWillMount() {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => this.setState({ products: data }))
    }

    render() {
        const catalog = this.state.products.map(products => (
            <div key={products.id}>
                <h3>{products.name}</h3>
                <img src={products.src} />
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

export default Products;