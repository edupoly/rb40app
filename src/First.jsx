import React from 'react'
import Second from './Second'

function First() {
  return (
    <div className='border border-2 border-danger p-2 m-2'>
        <h1>First Component</h1>
        <Second></Second>
    </div>
  )
}

export default First