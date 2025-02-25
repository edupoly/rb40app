import React from 'react'
import { useGetAllCustomersQuery } from '../../services/customer.api'

function ViewCustomers() {
    var {isLoading,data}=useGetAllCustomersQuery()
    return (
        <div>
            <h2>All Customers</h2>
            {
                isLoading && <b>Loading...</b>
            }
            <table className='table table-bordered'>
                <tbody>
                    {
                        !isLoading && data?.map((customer)=>{
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.fullname}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.course}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewCustomers