import React from 'react'
import './todo.css'
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

const Todo = (props) => {
    const trashHandler = () => {
        const temp = [...props.list]
        temp.splice(props.ind, 1)
        props.setList( temp );
    }
    return (
        <div className="todo">
            <p>{props.task}</p>
            <div className="controls">
                <div className="check">
                    {props.isDone ? <AiFillCheckCircle/> :<AiOutlineCheckCircle/>}
                </div>
                <div className="trash" onClick={trashHandler}>
                    <FaTrash/>
                </div>
            </div>
        </div>
    )
}

export default Todo