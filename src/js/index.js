import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

import store from './store';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  root,
);
