import React from 'react'
import './todos.css'
import {Todo} from '../Index'

const Todos = ({list}) => {
  // console.log(props.list)
  let tasks = list.map((task, index)=> <Todo task={task.task} isDone={task.isDone} key={index}/>)
  return (
    <div className='todos'>
      {tasks}
    </div>
  )
}

export default Todos