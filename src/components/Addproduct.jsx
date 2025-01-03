import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../store/actions/product.actions'
function Addproduct(props) {
    var [newproduct,setNewProduct] = useState({
        title:"",
        price:"",
        description:""
    })
    function addProductFn(){
        props.dispatch(addProduct(newproduct))
    }
  return (
    <div>
        <h1>Addproduct</h1>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" onChange={(e)=>{setNewProduct({...newproduct,title:e.target.value})}}/>
            <br />
            <input type="number" onChange={(e)=>{setNewProduct({...newproduct,price:e.target.value})}}/>
            <br />
            <input type="text" onChange={(e)=>{setNewProduct({...newproduct,description:e.target.value})}}/>
            <br />
            <button onClick={()=>{addProductFn()}}>Add Product</button>
        </form>
    </div>
  )
}

export default connect(store=>store)(Addproduct)