import * as ActionTypes from './action-types';
import reducer from './reducers';

let initialState = {
  visibilityFilter: ActionTypes.VisibilityFilters.SHOW_ALL,
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

  it('should handle CLEAR_COMPLETED', () => {
    expectedState.todos.ids = expectedState.todos.ids.filter(id => !expectedState.todos.todosById[id].completed);
    expect(initialState = reducer(initialState, {
      type: ActionTypes.CLEAR_COMPLETED
    }))
      .toEqual(expectedState);
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    expectedState.visibilityFilter = ActionTypes.VisibilityFilters.SHOW_ACTIVE;
    expect(initialState = reducer(initialState, {
      type: ActionTypes.SET_VISIBILITY_FILTER,
      filter: ActionTypes.VisibilityFilters.SHOW_ACTIVE
    }))
      .toEqual(expectedState);
  });
});
