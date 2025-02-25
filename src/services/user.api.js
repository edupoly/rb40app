// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),
  endpoints: (builder) => ({
    login: builder.query({
      query: (user) => `?mobile=${user.mobile}&password=${user.password}`,
    }),
    // addNewCustomer:builder.mutation({
    //     query:(newCustomer)=>{
    //         return {
    //             url:'/',
    //             method:'POST',
    //             body:newCustomer
    //         }
    //     }
    // }),
    signup:builder.mutation({
      query:(user)=>{
          return {
              url:'/',
              method:'POST',
              body:user
          }
      }
    }),
    updatePayment:builder.mutation({
      query:({id,payment})=>{
          return {
              url:`/${id}`,
              method:'PATCH',
              body:payment
          }
      }
    }),
    // deleteProduct:builder.mutation({
    //   query:(id)=>{
    //     return {
    //       url:`/${id}`,
    //       method:'DELETE'
    //     }
    //   }
    // }),
    // updateProduct:builder.mutation({
    //   query:(product)=>{
    //     return {
    //       url:`/${product.id}`,
    //       method:'PATCH',
    //       body:product
    //     }
    //   }
    // })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useUpdatePaymentMutation, useSignupMutation,useLoginQuery,useLazyLoginQuery } = userApi