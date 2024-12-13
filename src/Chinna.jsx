import React from 'react'

var Chinna=React.forwardRef(function(props,cref) {
  return (
    <div className="p-4 border border-success border-4 m-3">
        <h3>Chinna</h3>
        <input ref={cref} type="text" placeholder='Enter your address'/>
    </div>
  )
})

export default Chinna
//React.memo()//React.forwarRef