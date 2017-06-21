import * as ActionTypes from './action-types';
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

  it('should create an action to add a todo', () => {
    const id = 0;
    const expectedAction = {
      type: ActionTypes.TOGGLE_TODO,
      id
    };
    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to complete all todos', () => {
    const expectedAction = {
      type: ActionTypes.COMPLETE_ALL
    };
    expect(actions.completeAll()).toEqual(expectedAction);
  });

  it('should create an action to clear completed todos', () => {
    const expectedAction = {
      type: ActionTypes.CLEAR_COMPLETED
    };
    expect(actions.clearCompleted()).toEqual(expectedAction);
  });

  it('should create an action to set the visibility filter', () => {
    const expectedAction = {
      type: ActionTypes.SET_VISIBILITY_FILTER,
      filter: ActionTypes.VisibilityFilters.SHOW_ALL
    };
    expect(actions.setVisibilityFilter(ActionTypes.VisibilityFilters.SHOW_ALL)).toEqual(expectedAction);
  });
});
