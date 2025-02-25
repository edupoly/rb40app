import { useFormik } from 'formik'
import React from 'react'
import { useSetUserPasswordMutation } from '../../services/customer.api'
import { useSignupMutation } from '../../services/user.api'

function Signup() {
    var [signupFn]= useSignupMutation()
    const userForm = useFormik({
        initialValues:{
            mobile:"",
            password:"",
            role:"customer"
        },
        onSubmit:(values)=>{
            console.log(values)
            signupFn(values).then((res)=>{console.log(res)})
        }
    })
    return (
        <div>
            <h2>signup</h2>
            <form onSubmit={userForm.handleSubmit}>
                <input type="text" name="mobile" placeholder='enter your mobile' onChange={userForm.handleChange}/>
                <br />
                <input type="text" name="password" placeholder='enter your password' onChange={userForm.handleChange}/>
                <br />
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup