import React from 'react'
import './todos.css'
import {Todo} from '../Index'

const Todos = () => {
  return (
    <div className='todos'>
      <Todo/>
      <Todo/>
      <Todo/>
    </div>
  )
}

export default Todos