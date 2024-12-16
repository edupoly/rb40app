import React, { useContext } from 'react'
import Fourth from './Fourth'
import { ccontext } from './ComContext'

function Third() {
    var x = useContext(ccontext);
    console.log(x)
  return (
    <div className='border border-2 border-primary p-2 m-2'>
        <h1>Third</h1>
        <Fourth></Fourth>
    </div>
  )
}

export default Third