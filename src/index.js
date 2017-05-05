import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './store/reducers';
import App from './components/App';

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
