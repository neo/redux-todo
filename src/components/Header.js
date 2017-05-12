import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../store/actions';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: id => dispatch(addTodo(id))
  };
};

class Header extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const value = input.value.trim();
    if (value.length > 0) this.props.addTodo(value);
    input.value = '';
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
          />
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

Header.defaultProps = {
};

export default connect(null, mapDispatchToProps)(Header);
