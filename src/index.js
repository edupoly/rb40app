import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Counter from './components/Counter.jsx';
import Todolist from './components/Todolist.jsx';
import Countries from './components/Countries.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import Addproduct from './components/Addproduct.jsx';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/counter",
            element:<Counter></Counter>
        },
        {
            path:"/todolist",
            element:<Todolist></Todolist>
        },
        {
            path:"/countries",
            element:<Countries></Countries>
        },
        {
            path:"/products",
            element:<Products></Products>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        },
        {
          path:"/addProduct",
          element:<Addproduct></Addproduct>
        }
      ]
    },
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

