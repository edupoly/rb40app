import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Countries3() {
    var [countries,setCountries] = React.useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries([...data]))
    },[])
  return (
    <div className='d-flex m-2 p-2 border border-3 border-primary'>
        <ul className='w-50'>
            {
                countries?.map((country)=>{
                    return <li>
                        <Link to="/countries3/countrydetails3" state={country}>{country.name.common}</Link>
                        </li>
                })
            }
        </ul>
        <div className='w-50'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Countries3