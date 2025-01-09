import React, { useEffect, useState } from 'react'
import { useAddNewProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery, useUpdateProductMutation } from '../../services/products.api'

function Products() {

    var {isLoading,data}=useGetAllProductsQuery();
    var [getAllProducts,x,y]=useLazyGetAllProductsQuery()
    var [editFlag,setEdit]=useState(null)
    useEffect(()=>{console.log("ashd:",x,y)},[x.status])

    var [newProduct,setNewProduct] = React.useState({
        title:'',
        description:'',
        price:'',
        category:'',
        image:''
    })
    var [addNewProductFn]=useAddNewProductMutation()
    var [deleteProductFn]=useDeleteProductMutation()
    var [updateProductFn] = useUpdateProductMutation()
    function addNewProd(){
        addNewProductFn(newProduct).then((res)=>{
            getAllProducts();
        })
    }
    function delProd(id){
        deleteProductFn(id).then(()=>{
            getAllProducts()
        })
    }
    function editProduct(product){
        setEdit(true)
        setNewProduct({...product})
    }
    function updateProduct(){
        updateProductFn(newProduct).then(()=>{
            getAllProducts();
            setEdit(null)
        })
    }
    return (
        <div className='border border-2 p-2 m-2'>
            <h1>Products</h1>
            <div>
                <input type="text" value={newProduct.title} name="title" placeholder='title' onChange={(e)=>{setNewProduct({...newProduct,title:e.target.value})}}/><br/>
                <input type="text" value={newProduct.description} name="description" placeholder='description' onChange={(e)=>{setNewProduct({...newProduct,description:e.target.value})}}/><br/>
                <input type="text" value={newProduct.price} name="price" placeholder='price' onChange={(e)=>{setNewProduct({...newProduct,price:e.target.value})}}/><br/>
                <input type="text" value={newProduct.category} name="category" placeholder='category' onChange={(e)=>{setNewProduct({...newProduct,category:e.target.value})}}/><br/>
                <input type="text" value={newProduct.image} name="image" placeholder='image' onChange={(e)=>{setNewProduct({...newProduct,image:e.target.value})}}/><br/>
                {editFlag ?? (<button onClick={()=>{addNewProd()}}>Add New Product</button>)}
                {editFlag && (<button onClick={()=>{updateProduct()}}>Update Product</button>)}
                
                
            </div>
            {
                (isLoading || x.status==='pending') && (<img src="https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=6c09b9528o3c062vpymz64sgq7xqg0obcy1vyt65t28rhjeu&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>)
            }
            {
                isLoading===false && (
                    data.map((product)=>{
                        return  <li className='p-2'>
                                    {product.title}
                                    <button onClick={()=>{delProd(product.id)}}>Delete</button>
                                    <button onClick={()=>{editProduct(product)}}>Edit</button>
                                </li>
                    })
                )
            }
        </div>
    )
}

export default Products