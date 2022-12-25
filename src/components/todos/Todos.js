import React from 'react'
import './todos.css'
import {Todo} from '../Index'

const Todos = ({list, setList}) => {
  let tasks = list.map((task, index)=> <Todo task={task.task} isDone={task.isDone} key={index} ind={index} list={list} setList={setList}/>)
  return (
    <div className='todos'>
      {tasks}
    </div>
  )
}

export default Todos