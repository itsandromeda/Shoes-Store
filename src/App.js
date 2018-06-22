import React, { Component } from 'react';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
        <div>
            <h1>My Shop</h1>
            <Products />
        </div>
    );
  }
}

export default App;
