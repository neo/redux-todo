import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends PureComponent {
  render() {
    return (
      <li className={this.props.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={this.props.onToggle}
          />
          <label>{this.props.text}</label>
          <button className="destroy" onClick={this.props.onDelete}/>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

TodoItem.defaultProps = {};
