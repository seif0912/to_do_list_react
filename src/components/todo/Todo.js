import React from 'react'
import './todo.css'
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

const Todo = () => {
  return (
    <div className="todo">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestiae!</p>
        <div className="controls">
            <div className="check">
                <AiOutlineCheckCircle/>
                {/* <AiFillCheckCircle/>/ */}
            </div>
            <div className="trash">
                <FaTrash/>
            </div>
        </div>
    </div>
  )
}

export default Todo