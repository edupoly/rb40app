import React from 'react';
import Todo from './Todo';

function Todolist(){
    var [a,setA]=React.useState(13)
    var [todos,setTodos]=React.useState(['get car','pay rent','clear bills','clean bike'])
    function addTodo(){
        var s = document.getElementById("d1").value;
        setTodos([...todos,s])
    }
    function deleteTodo(ind){
        var temp = [...todos]
        temp.splice(ind,1)
        setTodos([...temp])
    }
    
    React.useEffect(()=>{console.log("Deepika")},[]);
    React.useEffect(()=>{console.log("Drithiman")})
    React.useEffect(()=>{console.log("Venkatesh")},[a])
    return (
        <div className="p-2 border border-5 m-3 border-danger">
            {console.log("Inside UI")}
            <input type="text" id='d1'/>
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