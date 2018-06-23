import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Products from './components/Products';

import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <h1>My Shop</h1>
                <Products />
            </div>
        </Provider>
    );
  }
}

export default App;
