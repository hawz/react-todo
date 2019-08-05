import React from 'react';
import './App.css';

import TodoItem from './components/TodoItem/TodoItem';

function App() {
  const style = {
    padding: 20
  };

  return (
    <div style={style}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
