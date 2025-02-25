import { useFormik } from 'formik'
import React from 'react'
import { useLazyLoginQuery } from '../../services/user.api'
import { useDispatch } from 'react-redux'
import { login } from './userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    var [loginFn]=useLazyLoginQuery()
    const dispatch = useDispatch();
    var navigate = useNavigate();
    var loginForm=useFormik({
        initialValues:{
            mobile:'',
            password:''
        },
        onSubmit:(values)=>{
            loginFn(values).then((res)=>{
                if(res.data.length===0){
                    alert("Check your details!!! LOGIN FAILED")
                }
                else{
                    dispatch(login(res.data[0]))
                    if(res.data[0].role==='admin'){
                        navigate("/admin")
                    }
                    if(res.data[0].role==='customer'){
                        navigate("/customer")
                    }
                }
            })
        }
    })
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={loginForm.handleSubmit}>
            <input type="text" name="mobile" onChange={loginForm.handleChange} />
            <br />
            <input type="text" name="password" onChange={loginForm.handleChange} />
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login