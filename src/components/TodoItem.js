import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={this.props.onToggle.bind(this, this.props.id)}
          />
          <label>{this.props.text}</label>
          <button className="destory"/>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};

TodoItem.defaultProps = {};
