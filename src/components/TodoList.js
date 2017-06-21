import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { VisibilityFilters } from '../store/action-types';

import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    if (this.props.todos.ids.length === 0) {
      return null;
    }

    return (
      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          checked={this.props.completedCount === this.props.todos.ids.length}
          onChange={this.props.completeAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {
            this.props.todos.ids
              .filter(id => {
                const completed = this.props.todos.todosById[id].completed;
                return !(
                  (this.props.visibilityFilter === VisibilityFilters.SHOW_ACTIVE && completed) ||
                  (this.props.visibilityFilter === VisibilityFilters.SHOW_COMPLETED && !completed)
                );
              })
              .map(id => <TodoItem
                key={id} id={id}
                onToggle={this.props.toggleTodo}
                {...this.props.todos.todosById[id]}
              />)
          }
        </ul>
      </section>
    );
  }
}

TodoList.propTypes = {
  completedCount: PropTypes.number.isRequired,
  todos: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.number),
    todosById: PropTypes.object.isRequired
  }),
  visibilityFilter: PropTypes.oneOf(Object.keys(VisibilityFilters)).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  completeAll: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
};

export default TodoList;
