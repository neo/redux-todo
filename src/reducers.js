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
      const id = state.ids.length;
      let todoWithId = {};
      todoWithId[id] = {
        text: action.text,
        completed: false
      };
      return {
        ids: state.ids.concat([id]),
        todosById: Object.assign({}, state.todosById, todoWithId)
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
