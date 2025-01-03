import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { addTodoItem } from '../store/actions/todo.action'
function Todolist(props) {
  useEffect(()=>{console.log("Todolist")})
    
  return (
    <div className='p-2 m-2 border border-2 border-info'>
        <h2>Todolist</h2>
        <input type="text" id="d1"/>
        <button onClick={()=>{props.addTodo(document.getElementById("d1").value)}}>Add Todo</button>
        <ul>
            {
                props.todos.map((t)=>{
                    return <li key={t}>{t}</li>
                })
            }
        </ul>
    </div>
  )
}
function mapStateToProps(state){
    return state.todoReducer
}
function mapDispatchToProps(dispatch){
    return {
        addTodo:(ntd)=>{dispatch(addTodoItem(ntd))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist) 