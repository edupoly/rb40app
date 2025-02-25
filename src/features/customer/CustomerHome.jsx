import React from 'react'
import CustomerNavbar from './CustomerNavbar'
import { Outlet } from 'react-router-dom'

function CustomerHome() {
  return (
    <div>
        <CustomerNavbar></CustomerNavbar>
        <Outlet></Outlet>
    </div>
  )
}

export default CustomerHome