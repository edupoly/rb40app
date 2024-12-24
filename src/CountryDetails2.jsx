import React from 'react'
import { useLocation } from 'react-router-dom'

function CountryDetails2() {
    var x = useLocation()
    console.log(x)
  return (
    <div>CountryDetails2</div>
  )
}

export default CountryDetails2