import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, reset } from './counterSlice';

function Counter() {
    var {count} = useSelector(state=>state.counterR)
    var dispatch = useDispatch();
  return (
    <div className='border border-2 p-2 m-2'>
        <h2>Counter:{count}</h2>
        <button onClick={()=>{dispatch(inc())}}>Increment</button>
        <button onClick={()=>{dispatch(dec())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default Counter