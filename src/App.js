import React, { Component } from 'react';
import './App.css';

import todosData from './data/todosData';
import TodoItem from './components/TodoItem/TodoItem';

class App extends Component {
  state = {
    todos: todosData
  }

  onToggleCompleted = (todo) => {
    const todoIndex = this.state.todos.findIndex(td => td.id === todo.id)
    const newTodo = {...this.state.todos[todoIndex]}
    const newTodos = [...this.state.todos]
    newTodo.completed = !todo.completed;
    newTodos[todoIndex] = newTodo;
    this.setState({todos: newTodos});
  }

  render() {
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

    const todosList = this.state.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleCompleted={this.onToggleCompleted} />
    ))

    return (
      <div style={style}>
        {todosList}
      </div>
    );
  }
}

export default App;
