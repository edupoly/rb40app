// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonproducts.up.railway.app/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => {
        return {
          url: "/",
          method: "POST",
          body: newProduct,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateProduct: builder.mutation({
      query: (product) => {
        return {
          url: `/${product.id}`,
          method: "PATCH",
          body: product,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUpdateProductMutation,
  useGetAllProductsQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useLazyGetAllProductsQuery,
} = productsApi;
