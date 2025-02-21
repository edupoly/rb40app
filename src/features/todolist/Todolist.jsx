import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todolistSlice';

function Todolist() {
    var {todos}=useSelector(state=>state.todolistR)
    var dispatch = useDispatch();
    var [newtodo,setNewTodo]=useState("")
  return (
    <div className='p-3'>
        <div className='border border-2 p-4 m-2 shadow-sm w-50 mx-auto rounded'>
            <h3 className='text-center'>Todolist</h3>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div className='d-flex mb-3'>
                    <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}} className='form-control w-50'/>
                    <button onClick={()=>{dispatch(addTodo(newtodo))}} className='btn btn-primary ms-2'>Add Todo</button>
                </div>
                <div>
                    {
                        todos?.map((t)=>{
                            return <p>{t}</p>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todolist