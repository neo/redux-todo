import * as ActionTypes from './ActionTypes';

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    text
  };
}
