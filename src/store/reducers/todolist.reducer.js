
const initialState = {
    todos:['get own house','clear loans','pay school fee','get own space']
}
export var todoReducer = (state=initialState,action)=>{

    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}