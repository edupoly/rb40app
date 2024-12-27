const initialState = {
    countries:[]
}

export const countriesReducer = function(state=initialState,action){
    if(action.type==='UPDATE_COUNTRIES'){
        return {...state,countries:[...action.payload]}
    }
    return state
}