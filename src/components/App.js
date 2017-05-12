import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header/>
        <TodoList/>
      </section>
    );
  }
}

export default App;
