import React, { useEffect, useReducer } from 'react'

function reducer(state,action){
    if(action.type==='INC'){
        return {count:state.count+1}
    }
    if(action.type==='DEC'){
        return {count:state.count-1}
    }
}

function Counter() {
    var [sta,disp] = useReducer(reducer,{count:1});

    return (
        <div className="border border-2 border-success m-2 p-2">
            <h2>Counter:{sta.count}</h2>
            <button onClick={()=>{disp({type:"INC"})}}>Increment</button>
            <button onClick={()=>{disp({type:"DEC"})}}>Decrement</button>
        </div>
    )
}

export default Counter