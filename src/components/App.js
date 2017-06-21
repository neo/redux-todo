import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const mapStateToProps = state => Object.assign({
  completedCount: state.todos.ids.map(id => state.todos.todosById[id])
    .reduce((count, todo) => todo.completed ? count + 1 : count, 0)
}, state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class App extends PureComponent {
  render() {
    return (
      <section className="todoapp">
        <Header
          addTodo={this.props.addTodo}
        />
        <TodoList
          completedCount={this.props.completedCount}
          todos={this.props.todos}
          visibilityFilter={this.props.visibilityFilter}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
          completeAll={this.props.completeAll}
        />
        <Footer
          completedCount={this.props.completedCount}
          todos={this.props.todos}
          visibilityFilter={this.props.visibilityFilter}
          setVisibilityFilter={this.props.setVisibilityFilter}
          clearCompleted={this.props.clearCompleted}
        />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
