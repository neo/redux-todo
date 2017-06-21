import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class App extends PureComponent {
  render() {
    return (
      <section className="todoapp">
        <Header
          addTodo={this.props.addTodo}
        />
        <TodoList
          todos={this.props.todos}
          visibilityFilter={this.props.visibilityFilter}
          toggleTodo={this.props.toggleTodo}
        />
        <Footer
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
