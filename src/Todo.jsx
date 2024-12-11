import React from 'react'
function Todo(props){
    React.useEffect(()=>{
        console.log("Todo Mounted :: "+props.t);
        return ()=>{console.log("unmounted")}
    },[])
    return (
        <li className="p-2 border border-5 m-2 border-primary">
            {props.t}
            <button onClick={()=>{props.delTodoR(props.i)}}>Delete</button>
        </li>
    )
}
export default Todo;