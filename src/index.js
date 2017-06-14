import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';
import { Provider } from 'react-redux';

import createPersistentStore from './store/create-store';
import App from './components/App';
import './style.css';

const store = createPersistentStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
