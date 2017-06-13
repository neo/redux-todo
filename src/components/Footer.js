import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { VisibilityFilters } from '../store/ActionTypes';
import { setVisibilityFilter } from '../store/actions';

const visibilityFilterNames = {
  [VisibilityFilters.SHOW_ALL]: 'All',
  [VisibilityFilters.SHOW_ACTIVE]: 'Active',
  [VisibilityFilters.SHOW_COMPLETED]: 'Completed'
};

const mapStateToProps = state => {
  return {
    count: state.todos.ids.length,
    activeCount: state.todos.ids.map(id => state.todos.todosById[id]).filter(todo => !todo.completed).length,
    completedCount: state.todos.ids.map(id => state.todos.todosById[id]).filter(todo => todo.completed).length,
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
  };
};

class Footer extends Component {
  render() {
    if (this.props.count === 0) {
      return null;
    }

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.activeCount}</strong>
          <span> {this.props.activeCount === 1 ? 'item' : 'items'} left</span>
        </span>
        <ul className="filters">
          {
            Object.keys(VisibilityFilters).map(key => (
              <li
                key={key}
              >
                <a
                  onClick={() => this.props.setVisibilityFilter(VisibilityFilters[key])}
                  className={VisibilityFilters[key] === this.props.visibilityFilter ? 'selected' : ''}
                >
                  {visibilityFilterNames[key]}
                </a>
              </li>
            ))
          }
        </ul>
        {
          this.props.completedCount &&
          <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
        }
      </footer>
    );
  }
}

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  visibilityFilter: PropTypes.oneOf(Object.keys(VisibilityFilters)).isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

Footer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
