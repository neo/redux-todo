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
    return (
      <footer className="footer">
        <span className="todo-count">
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
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

Footer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
