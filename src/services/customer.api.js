// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/customers' }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => `/`,
    }),
    addNewCustomer:builder.mutation({
        query:(newCustomer)=>{
            return {
                url:'/',
                method:'POST',
                body:newCustomer
            }
        }
    }),
    setUserPassword:builder.mutation({
      query:(user)=>{
          return {
              url:'/',
              method:'POST',
              body:user
          }
      }
    }),
    getCustomerDetails: builder.query({
      query: (mobile) => `?mobile=${mobile}`,
    })

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
export const { useGetCustomerDetailsQuery, useGetAllCustomersQuery,useAddNewCustomerMutation,useSetUserPasswordMutation } = customerApi