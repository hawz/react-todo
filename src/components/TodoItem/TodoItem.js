import React from 'react'

import classes from './TodoItem.module.css'

const todoItem = (props) => {
  const classNames = [classes.TodoItem]
  if (props.todo.completed) {
    classNames.push(classes.TodoCompleted)
  }
  return (
    <label className={classNames.join(' ')}>
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
