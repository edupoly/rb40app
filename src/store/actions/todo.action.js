import { ADDTODO } from "./actions";

export function addTodoItem(newtodoItem){
    return {type:ADDTODO,payload:newtodoItem}
}