import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
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

export default Header;
