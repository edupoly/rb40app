import React from 'react'
import { useLocation } from 'react-router-dom'

function CountryDetails3() {
    var {state}= useLocation()
  return (
    <div className='m-2 p-2 border border-3 border-info'>
        <h1>{ state?.name.common}CountryDetails3</h1>
        <img className='w-100' src={state?.flags.svg} alt="" />
    </div>
  )
}

export default CountryDetails3