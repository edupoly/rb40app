import React, { useEffect, useState } from 'react'
import { useAddNewProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery, useUpdateProductMutation } from '../../services/products.api'

function Products() {

    var {isLoading,data,error}=useGetAllProductsQuery();
    console.log(data)
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
    
    function addNewProd(e){
        addNewProductFn(newProduct).then((res)=>{
            getAllProducts();
             e.target.value=""
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
    function updateProduct(e){
        updateProductFn(newProduct).then(()=>{
            getAllProducts();
            setEdit(null)
            e.target.value=""
        })
    }
    return (
        <div className="row justify-content-center" style={{ marginTop: '30px' }}>
            <div className="col-12 col-sm-8 col-md-6 col-lg-8">
                <div className='border border-2 p-4 rounded shadow-sm'>
                    <h1 className="text-center mb-4">Products</h1>
                    <div>
                        <input type="text" value={newProduct.title} name="title" placeholder='Title' onChange={(e)=>{setNewProduct({...newProduct,title:e.target.value})}} className='form-control p-2 '/><br/>
                        <input type="text" value={newProduct.description} name="description" placeholder='Description' onChange={(e)=>{setNewProduct({...newProduct,description:e.target.value})}} className='form-control p-2' /><br/>
                        <input type="text" value={newProduct.price} name="price" placeholder='Price' onChange={(e)=>{setNewProduct({...newProduct,price:e.target.value})}} className='form-control p-2' /><br/>
                        <input type="text" value={newProduct.category} name="category" placeholder='Category' onChange={(e)=>{setNewProduct({...newProduct,category:e.target.value})}} className='form-control p-2' /><br/>
                        <input type="text" value={newProduct.image} name="image" placeholder='Image' onChange={(e)=>{setNewProduct({...newProduct,image:e.target.value})}} className='form-control p-2' /><br/>
                        {editFlag ?? (<button onClick={(e)=>{addNewProd(e)}} className='btn btn-outline-success'>Add New Product</button>)}
                        {editFlag && (<button className='btn btn-outline-primary ' onClick={(e)=>{updateProduct(e)}}>Update Product</button>)}
                    </div>
                    <div>
                        {
                            (isLoading || x.status==='pending') && (<img src="https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=6c09b9528o3c062vpymz64sgq7xqg0obcy1vyt65t28rhjeu&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>)
                        }
                        {
                            error && <b className='text-danger'>{error?.error}</b>
                        }
                    </div>
                </div>
                {
                    !isLoading && (
                        data?.map((product)=>{
                            return  <li className='p-2'>
                                        {product.title}
                                        <button className='btn btn-outline-danger mx-2'  onClick={()=>{delProd(product.id)}}>Delete</button>
                                        <button  className='btn btn-outline-warning  '  onClick={()=>{editProduct(product)}}>Edit</button>
                                    </li>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Products