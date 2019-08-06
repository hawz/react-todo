import React from 'react'

import classes from './TodoItem.module.css'

const todoItem = (props) => {
  return (
    <label className={classes.TodoItem}>
      {props.todo.text}
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.toggleCompleted(props.todo)}
      />
      <span className={classes.Checkmark}></span>
    </label>
  )
}

export default todoItem
