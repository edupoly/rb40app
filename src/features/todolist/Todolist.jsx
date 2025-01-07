import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todolistSlice';

function Todolist() {
    var {todos}=useSelector(state=>state.todolistR)
    var dispatch = useDispatch();
    var [newtodo,setNewTodo]=useState("")
  return (
    <div className='border border-2 p-2 m-2'>
        <h3>Todolist</h3>
        <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(newtodo))}}>Add Todo</button>
        <ul>
            {
                todos?.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist