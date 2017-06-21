import { combineReducers } from 'redux';

import * as ActionTypes from './action-types';

const initialState = {
  visibilityFilter: ActionTypes.VisibilityFilters.SHOW_ALL,
  todos: {
    ids: [],
    todosById: {}
  }
};

function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function todos(state = initialState.todos, action) {
  let todosById = Object.assign({}, state.todosById);
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const id = Object.keys(state.todosById).reduce((max, id) => Math.max(max, id), -1) + 1;
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
      todosById[action.id].completed = !state.todosById[action.id].completed;
      return {
        ids: state.ids,
        todosById: Object.assign({}, state.todosById, todosById)
      };

    case ActionTypes.COMPLETE_ALL:
      const areAllCompleted = state.ids.map(id => state.todosById[id]).every(todo => todo.completed);
      state.ids.forEach(id => todosById[id].completed = !areAllCompleted);
      return {
        ids: state.ids,
        todosById
      };

    case ActionTypes.CLEAR_COMPLETED:
      const ids = state.ids.filter(id => !state.todosById[id].completed);
      return {
        ids,
        todosById: state.todosById
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
