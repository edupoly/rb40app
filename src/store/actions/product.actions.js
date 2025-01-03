export function getAllProducts(){
    return function(dispatch){
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>dispatch({type:'UPDATE_PRODUCTS',payload:[...data]}))
    }
}
export function addProduct(product){
    return function(dispatch){
        fetch("http://localhost:4000/products",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then((res)=>{return res.json()})
        .then(data=>{
            dispatch(getAllProducts())
        })
    }
}




export function addProductToCart(cartItems,product){
    var cartItem = {...product,count:1};
    cartItems.push(cartItem)
    return {type:'UPDATE_CART',payload:cartItems}
}
