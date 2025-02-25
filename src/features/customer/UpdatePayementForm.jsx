import { useFormik } from 'formik'
import React from 'react'

import { useSelector } from 'react-redux'
import { useUpdatePaymentMutation } from '../../services/payments.api'


function UpdatePayementForm() {
    const {user} = useSelector(state=>state.userR)

    const [updatePaymentFn] = useUpdatePaymentMutation()
    var paymentForm = useFormik({
        initialValues:{
            mode:'',
            amount:'',
            remarks:'',
            dateofpayment:'',
            mobile:user.mobile
        },
        onSubmit:(values)=>{
            console.log(values)
            updatePaymentFn(values).then(res=>console.log(res))
        }
    })
  return (
    <div>
        <h2>UpdatePayementForm</h2>
        <form onSubmit={paymentForm.handleSubmit}>
            <input type="text" name="mode" onChange={paymentForm.handleChange} placeholder='Mode of Payment'/>
            <br />
            <input type="text" name="amount" onChange={paymentForm.handleChange} placeholder='amount paid'/>
            <br />
            <input type="text" name="remarks" onChange={paymentForm.handleChange} placeholder='remarks'/>
            <br />
            <input type="date" name="dateofpayment" onChange={paymentForm.handleChange} placeholder='Date of Payment'/>
            <br />
            <button>Update Payment</button>
        </form>
    </div>
  )
}

export default UpdatePayementForm