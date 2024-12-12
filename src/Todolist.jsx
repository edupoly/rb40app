import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type==='ADDTODO'){
        var x = document.getElementById("d1").value;
        return {todos:[...state.todos,x]}
    }
    if(action.type==='DELETETODO'){
        state.todos.splice(action.index,1)
        return {...state}
    }
}
function Todolist() {
    var [state,dispatch]=useReducer(reducer,{todos:['todo1','2nd todo']})
  return (
    <div className="border border-2 border-info m-2 p-2">
        <h2>Todolist</h2>
        <input type="text" id='d1'/>
        <button onClick={()=>{dispatch({type:'ADDTODO'})}}>Add Todo</button>
        <ul>
            {
                state.todos.map((todo,i)=>{
                    return <li>
                        {todo}
                        <button onClick={()=>{dispatch({type:'DELETETODO',index:i})}}>Delete</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist