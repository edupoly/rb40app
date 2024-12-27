import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { decCounter, incCounter } from './store/actions/counter.actions'
function Counter(props) {
  useEffect(()=>{console.log("Counter")})
  return (
    <div className='p-2 m-2 border border-2 border-danger'>
        <h1>Counter:{props.count}</h1>
        <button onClick={()=>{props.inc()}}>
            Increment
        </button>
        <button onClick={()=>{props.dec()}}>Decrement</button>
    </div>
  )
}
function mapStateToProps(state){
  return state.counterReducer
}
function mapDispatchToProps(dispatch){
  return {
    inc:()=>{dispatch(incCounter())},
    dec:()=>{dispatch(decCounter())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)