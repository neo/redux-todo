import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input autoFocus placeholder="What needs to be done?" className="new-todo"/>
        </header>
      </section>
    );
  }
}

export default App;
