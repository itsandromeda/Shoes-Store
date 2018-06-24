import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Storefront from './components/Storefront';

import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <Storefront />
            </div>
        </Provider>
    );
  }
}

export default App;