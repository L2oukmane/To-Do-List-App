import React, { Component } from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
     <TodoWrapper />
      </div>
    );
  }
}

export default App;
