import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminDashboard