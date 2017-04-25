import * as ActionTypes from './ActionTypes';
import * as actions from './actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Test';
    const expectedAction = {
      type: ActionTypes.ADD_TODO,
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
