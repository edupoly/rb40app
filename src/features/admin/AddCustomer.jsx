import React from 'react'
import { useFormik } from 'formik'
import { useAddNewCustomerMutation } from '../../services/customer.api'
function AddCustomer() {
    var [addNewCustomerFn]=useAddNewCustomerMutation()

    var customerForm = useFormik({
        initialValues:{
            fullname:'',
            mobile:'',
            mailid:'',
            course:'',
            totalFee:''
        },
        onSubmit:(values)=>{
            addNewCustomerFn(values)
        }
    })
  return (
    <div className='container'>
        <h2>AddCustomer</h2>
        <form onSubmit={customerForm.handleSubmit}>
            <input type="text" name="fullname" onChange={customerForm.handleChange} placeholder='Full Name'/>
            <br />
            <input type="text" name="mobile" onChange={customerForm.handleChange} placeholder='Mobile'/>
            <br />
            <input type="text" name="mailid" onChange={customerForm.handleChange} placeholder='Mail ID'/>
            <br />
            <input type="text" name="course" onChange={customerForm.handleChange} placeholder='Course'/>
            <br />
            <input type="text" name="totalFee" onChange={customerForm.handleChange} placeholder='Total Fee'/>
            <br />
            <button>Add Customer</button>
        </form>
    </div>
  )
}

export default AddCustomer