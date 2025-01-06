import React, { useEffect } from 'react';
import Todo from './Todo';

function Todolist(){
    var [a,setA]=React.useState(13)
    var [newtodo,setNewTodo] = React.useState('')
    var [todos,setTodos]=React.useState(['get car','pay rent','clear bills','clean bike'])
    function addTodo(){
        setTodos([...todos,newtodo])
    }

    function deleteTodo(ind){
        var temp = [...todos]
        temp.splice(ind,1)
        setTodos([...temp])
    }
    useEffect(()=>{console.log("Todolist re-renderd")})
    return (
        <div className="p-2 border border-5 m-3 border-danger">
            <input type="text" id='d1' onChange={(e)=>{setNewTodo(e.target.value)}}/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <Todo  t={todo} delTodoR={deleteTodo} i={i}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist