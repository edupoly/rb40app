import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, reset } from './counterSlice';

function Counter() {
    var {count} = useSelector(state=>state.counterR)
    var dispatch = useDispatch();
  return (
    <div className='p-3'>
      <div className='border border-2 p-4 m-2 w-50 shadow-sm rounded mx-auto'>
        <h2 className='text-center'>Counter : { count }</h2>
        <div className='d-flex justify-content-center'>
          <button onClick={()=>{dispatch(inc())}} className='btn btn-outline-success me-2'>Increment</button>
          <button onClick={()=>{dispatch(dec())}} className='btn btn-outline-danger me-2'>Decrement</button>
          <button onClick={()=>{dispatch(reset())}} className='btn btn-outline-primary'>Reset</button>
        </div>
      </div> 
    </div>
  )
}

export default Counter 