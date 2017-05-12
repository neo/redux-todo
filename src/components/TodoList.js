import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTodo } from '../store/actions';

import TodoItem from './TodoItem';

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <input type="checkbox"
          className="toggle-all"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.ids.map(id => <TodoItem
            key={id} id={id}
            onToggle={this.props.toggleTodo}
            {...this.props.todos.todosById[id]}
          />)}
        </ul>
      </section>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.number),
    todosById: PropTypes.object.isRequired
  }),
  toggleTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
