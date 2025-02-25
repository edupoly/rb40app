import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import AddCustomer from './features/admin/AddCustomer.jsx';
import ViewCustomers from './features/admin/ViewCustomers.jsx';
import CreatePassword from './features/customer/CreatePassword.jsx';
import Signup from './features/customer/Signup.jsx';
import Login from './features/customer/Login.jsx';
import CustomerHome from './features/customer/CustomerHome.jsx';
import AdminDashboard from './features/admin/AdminDashboard.jsx';
import CustomerPayments from './features/customer/CustomerPayments.jsx';
import UpdatePayementForm from './features/customer/UpdatePayementForm.jsx';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
    {
      path:'/createPassword',
      element:<CreatePassword></CreatePassword>
    },
    {
      path:"/customer",
      element:<CustomerHome></CustomerHome>,
      children:[
        {
          path:'/customer/payments',
          element:<CustomerPayments></CustomerPayments>
        },
        {
          path:"/customer/updatePayment",
          element:<UpdatePayementForm></UpdatePayementForm>
        }
      ]
    },
    {
      path:"/admin",
      element:<AdminDashboard></AdminDashboard>,
      children:[
        {
          path:"/admin/addCustomer",
          element:<AddCustomer></AddCustomer>
        },
        {
          path:'/admin/viewCustomers',
          element:<ViewCustomers></ViewCustomers>
        },
      ]
    }
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

