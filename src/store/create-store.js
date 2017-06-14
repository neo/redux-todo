import { createStore } from 'redux';

import todoApp from './reducers';

const key = 'todos';

export default function createPersistentStore() {
  const store = createStore(
    todoApp,
    JSON.parse(window.localStorage.getItem(key)) || undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => window.localStorage.setItem(key, JSON.stringify(store.getState())));

  return store;
}
