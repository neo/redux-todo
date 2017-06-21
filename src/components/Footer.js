import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { VisibilityFilters } from '../store/action-types';

const visibilityFilterNames = {
  [VisibilityFilters.SHOW_ALL]: 'All',
  [VisibilityFilters.SHOW_ACTIVE]: 'Active',
  [VisibilityFilters.SHOW_COMPLETED]: 'Completed'
};

class Footer extends PureComponent {
  render() {
    const totalCount = this.props.todos.ids.length;

    if (totalCount === 0) {
      return null;
    }

    const activeCount = totalCount - this.props.completedCount;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong>
          <span> {activeCount === 1 ? 'item' : 'items'} left</span>
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
          Boolean(this.props.completedCount) &&
          <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
        }
      </footer>
    );
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  todos: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.number),
    todosById: PropTypes.object.isRequired
  }),
  visibilityFilter: PropTypes.oneOf(Object.keys(VisibilityFilters)).isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

Footer.defaultProps = {};

export default Footer;
