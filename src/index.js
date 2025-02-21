import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Products from './features/products/Products.jsx';
import Todolist from './features/todolist/Todolist.jsx';
import Counter from './features/counter/Counter.jsx';
import Home from './features/components/Home.jsx';

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '/home',
                element : <Home/>
            },
            {
                path : '/products',
                element : <Products/>
            },
            {
                path : '/todolist',
                element : <Todolist/>
            },
            {
                path : '/counter',
                element : <Counter/>
            }
        ]
    }

  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

