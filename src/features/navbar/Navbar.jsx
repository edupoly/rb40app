import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../customer/userSlice';

function Navbar() {
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
                <Link className="navbar-brand" to="/">Accountpoly</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* {
                            user.role && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addCustomer">Add Customer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewCustomers">View Customers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger" onClick={logoutFn}>Logout</button>
                                    </li>
                                </>
                            )
                        } */}
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

export default Navbar