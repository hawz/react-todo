import React from 'react'

import classes from './TodoItem.module.css'

const todoItem = (props) => {
  return (
    <label className={classes.TodoItem}>
      One
      <input type="checkbox" />
      <span className={classes.Checkmark}></span>
    </label>
  )
}

export default todoItem
