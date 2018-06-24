import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';

import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <Cart />
                <Products />
            </div>
        </Provider>
    );
  }
}

export default App;