import { combineReducers } from 'redux';

import * as ActionTypes from './ActionTypes';

const initialState = {
  todos: {
    ids: [],
    todosById: {}
  }
};

function todos(state = initialState.todos, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const id = state.ids.reduce((max, id) => Math.max(max, id), -1) + 1;
      const todoWithId = {
        [id]: {
          text: action.text,
          completed: false
        }
      };
      return {
        ids: state.ids.concat([id]),
        todosById: Object.assign({}, state.todosById, todoWithId)
      };

    case ActionTypes.TOGGLE_TODO:
      let todosById = Object.assign({}, state.todosById);
      todosById[action.id].completed = !state.todosById[action.id].completed;
      return {
        ids: state.ids,
        todosById: Object.assign({}, state.todosById, todosById)
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
