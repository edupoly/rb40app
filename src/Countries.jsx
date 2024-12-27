import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from './store/actions/countries.action'
function Countries(props) {
    console.log(props)
    useEffect(()=>{
        props.loadCountries()
    },[])
  return (
    <div className='p-2 m-2 border border-2 border-success'>
        <h1>Countries</h1>
        <ul>
            {
                props.countries.map((c)=>{return <li>{c.name}</li>})
            }
        </ul>
    </div>
  )
}

function mapStateToProps(state){
    return state.countriesReducer
}
function mapDispatchToProps(dispatch){
    return {
        loadCountries:()=>{dispatch(getAllCountries())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Countries)