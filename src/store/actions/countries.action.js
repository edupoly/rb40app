export function getAllCountries(){
    return (dispatch)=>{
        fetch('https://countriesnow.space/api/v0.1/countries/states')
            .then(res=>res.json())
            .then(details=>{dispatch({type:"UPDATE_COUNTRIES",payload:details.data})})
    }
}
