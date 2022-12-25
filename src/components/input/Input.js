import React from 'react'
import './input.css'

const Input = ({list, setList}) => {
    // const idGenerator = (list) =>{
    //     if (list.length === 0) {
    //         return 0;
    //     }else{
    //         let max = list[0].id;
    //         for(let i=0; i>list.length; i++){
    //             if (max < list[i].id){
    //                 max = list[i].id
    //             }
    //         }
    //         return max + 1
    //     }
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        const task = {task: e.target.task.value, isDone: false}
        setList(prev => [...prev, task])
        e.target.task.value = ''
    }
    return (
        <form onSubmit={submitHandler} className="webflow-style-input">
            <input name='task' type='text' placeholder="What's your email?"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Input