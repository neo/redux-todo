import React, { PureComponent } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends PureComponent {
  render() {
    return (
      <section className="todoapp">
        <Header/>
        <TodoList/>
        <Footer/>
      </section>
    );
  }
}

export default App;
