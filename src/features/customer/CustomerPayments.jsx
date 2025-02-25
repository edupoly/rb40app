import React, { useEffect } from 'react'
import { useGetCustomerDetailsQuery } from '../../services/customer.api'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetCustomerPaymentsQuery, useLazyGetCustomerPaymentsQuery } from '../../services/payments.api';

function CustomerPayments() {
    const {user} = useSelector(state=>state.userR)

    const {isLoading:isMobileLoading,data:userData}=useGetCustomerDetailsQuery(user.mobile);
    const {isLoading:isPaymentLoading,data:paymentData} = useGetCustomerPaymentsQuery(user.mobile);
    console.log(paymentData)
    const [getPaymentsFn] = useLazyGetCustomerPaymentsQuery(user.mobile)
    useEffect(()=>{
      getPaymentsFn(user.mobile).then(res=>console.log(res))
    },[])
  return (
    <div>
        <h1>CustomerPayments</h1>
        {isMobileLoading && <b>Loading...</b>}
        <h3>Total Fee:{!isMobileLoading && userData[0]?.totalFee}</h3>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Mode</th>
              <th>Amount</th>
              <th>Remarks</th>
              <th>Date of Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              paymentData?.map((payment)=>{
                return <tr>
                  <td>{payment.mode}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.remarks}</td>
                  <td>{payment.dateofpayment}</td>

                </tr>
              })
            }
          </tbody>
          <tfoot className='table-success'>
            <tr>
              <th>Pending:{!isMobileLoading && (userData[0]?.totalFee-paymentData?.reduce((a,b)=>{return a+ +b.amount},0))}</th>
              <th>Paid:{paymentData?.reduce((a,b)=>{return a+ +b.amount},0)}</th>
            </tr>
          </tfoot>
        </table>
        {/* <Link to="/customer/updatePayment" className='btn btn-success'>Update Payment Now!!!</Link> */}
    </div>
  )
}

export default CustomerPayments