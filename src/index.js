import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './Aboutus.jsx';
import ContactUs from './Contactus.jsx';
import CountryCard from './CountryCard.jsx';
import CountryDetails from './CountryDetails.jsx';
import CountryDetails2 from './CountryDetails2.jsx';
import Countries3 from './Countries3.jsx';
import CountryDetails3 from './CountryDetails3.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/aboutus",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/contactus",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/countries",
        element:<CountryCard></CountryCard>
      },
      {
        path:"/countries3",
        element:<Countries3></Countries3>,
        children:[
          {
            path:"/countries3/countrydetails3",
            element:<CountryDetails3></CountryDetails3>
          }
        ]
      },
      {
        path:"/countryDetails/:cname",
        element:<CountryDetails></CountryDetails>
      },
      {
        path:"/inkaDetails",
        element:<CountryDetails2></CountryDetails2>
      },
      
    ]
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

