import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../customer/userSlice';

function CustomerNavbar() {
   const {user} = useSelector(state=>state.userR)
   var dispatch = useDispatch();
   var navigate = useNavigate()

   const logoutFn=()=>{
        dispatch(logout())
        navigate("/login")
    }
  return (
    <div className=''>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/customer">Accountpoly</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/customer">Home</Link>
                        </li>
                        {
                            user.role && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/customer/payments">Payments</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/customer/updatePayment">Update Payments</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger" onClick={logoutFn}>Logout</button>
                                    </li>
                                </>
                            )
                        }
                        {
                            !user.role && (<>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </>)
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default CustomerNavbar