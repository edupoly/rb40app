import React, { useEffect } from 'react'
import { addProductToCart, getAllProducts } from '../store/actions/product.actions'
import { connect } from 'react-redux';

function Products({products,cartItems,getAllProductsFn,addProductToCartFn}) {
    useEffect(()=>{
        getAllProductsFn();
    },[])
    useEffect(()=>{
        console.log(cartItems)
    })
  return (
    <div className='p-2 m-2 border border-2 border-success'>
        <h1>Products</h1>
        <ul>
            {
                products.map((product)=>{
                    return <li>
                            {product.title}
                            <button className='btn btn-success m-2' onClick={()=>{addProductToCartFn(cartItems,product)}}>Add To Cart</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}
function mapStateToProps(state){
    return state.productsReducer
}
function mapDispatchToProps(dispatch){
    return {
        getAllProductsFn:()=>{dispatch(getAllProducts())},
        addProductToCartFn:(cartItems,product)=>{dispatch(addProductToCart(cartItems,product))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products) 