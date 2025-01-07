import React from 'react'
import { useAddNewProductMutation, useGetAllProductsQuery } from '../../services/products.api'

function Products() {
    var {isLoading,data}=useGetAllProductsQuery();
    var [newProduct,setNewProducts] = React.useState({
        title:'',
        description:'',
        price:'',
        category:'',
        image:''
    })
    var [addNewProductFn]=useAddNewProductMutation()
    function addNewProd(){
        addNewProductFn(newProduct).then((res)=>{console.log(res)})
    }
    return (
        <div className='border border-2 p-2 m-2'>
            <h1>Products</h1>
            <div>
                <input type="text" name="title" placeholder='title' onChange={(e)=>{setNewProducts({...newProduct,title:e.target.value})}}/><br/>
                <input type="text" name="description" placeholder='description' onChange={(e)=>{setNewProducts({...newProduct,description:e.target.value})}}/><br/>
                <input type="text" name="price" placeholder='price' onChange={(e)=>{setNewProducts({...newProduct,price:e.target.value})}}/><br/>
                <input type="text" name="category" placeholder='category' onChange={(e)=>{setNewProducts({...newProduct,category:e.target.value})}}/><br/>
                <input type="text" name="image" placeholder='image' onChange={(e)=>{setNewProducts({...newProduct,image:e.target.value})}}/><br/>
                <button onClick={()=>{addNewProd()}}>Add New Product</button>
            </div>
            {
                isLoading && (<img src="https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=6c09b9528o3c062vpymz64sgq7xqg0obcy1vyt65t28rhjeu&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>)
            }
            {
                isLoading===false && (
                    data.map((products)=>{
                        return <li>{products.title}</li>
                    })
                )
            }
        </div>
    )
}

export default Products