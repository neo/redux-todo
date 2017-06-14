import * as ActionTypes from './ActionTypes';

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  };
}

export function clearCompleted() {
  return {
    type: ActionTypes.CLEAR_COMPLETED
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
  };
}
