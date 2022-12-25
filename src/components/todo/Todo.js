import React from 'react'
import './todo.css'
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

const Todo = (props) => {
    const checkHandler = () => {
        const temp = [...props.list]
        temp[props.ind].isDone = !temp[props.ind].isDone
        props.setList( temp );
    }
    const trashHandler = () => {
        const temp = [...props.list]
        temp.splice(props.ind, 1)
        props.setList( temp );
    }
    return (
        <div className={`todo ${props.isDone ? 'done' : ''}`}>
        {/* <div className={`todo done`}> */}
            <p>{props.task}</p>
            <div className="controls">
                <div className="check" onClick={checkHandler}>
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