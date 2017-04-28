import * as ActionTypes from './ActionTypes';
import reducer from './reducers';

let initialState = {
  todos: {
    ids: [],
    todosById: {}
  }
};

let expectedState = JSON.parse(JSON.stringify(initialState));

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TODO', () => {
    const id = 0;
    const text = 'Test';
    expectedState.todos.ids = expectedState.todos.ids.concat([id]);
    expectedState.todos.todosById[id] = { text, completed: false };
    expect(initialState = reducer(initialState, {
      type: ActionTypes.ADD_TODO,
      text
    }))
      .toEqual(expectedState);
  });

  it('should handle TOGGLE_TODO', () => {
    const id = 0;
    expectedState.todos.todosById[id].completed = true;
    expect(initialState = reducer(initialState, {
      type: ActionTypes.TOGGLE_TODO,
      id
    }))
      .toEqual(expectedState);
  });
});
