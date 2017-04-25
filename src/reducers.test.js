import * as ActionTypes from './ActionTypes';
import reducer from './reducers';

const initialState = {
  todos: {
    ids: [],
    todosById: {}
  }
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TODO', () => {
    const text = 'Test';
    expect(reducer(initialState, {
      type: ActionTypes.ADD_TODO,
      text
    }))
      .toEqual({
        todos: {
          ids: [0],
          todosById: {
            0: { text, completed: false }
          }
        }
      });
  });
});
