const initialState = {
    products:[],
    cartItems:[]
}
export const productsReducer = (state=initialState,action)=>{
    if(action.type==='UPDATE_PRODUCTS'){
        return {...state,products:[...action.payload]}
    }
    if(action.type==='UPDATE_CART'){
        return {...state,cartItems:[...action.payload]}
    }
    return state
}