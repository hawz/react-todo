import React from 'react';
import './App.css';

import TodoItem from './components/TodoItem/TodoItem';

function App() {
  const style = {
    backgroundColor: "white",
    margin: "auto",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
    border: "1px solid #efefef",
    boxShadow: `
    0 1px 1px rgba(0,0,0,0.15),
    0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0,0,0,0.15),
    0 20px 0 -10px #eee,
    0 20px 1px -9px rgba(0,0,0,0.15)
    `
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
