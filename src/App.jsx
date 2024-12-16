import { useEffect, useState } from "react";

function App() {
  var [products,setProducts]=useState([]);
  
  useEffect(()=>{
    const url = 'https://pinnacle-odds.p.rapidapi.com/kit/v1/special-markets?is_have_odds=true&sport_id=1';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9e8e4f62b2msh562197ec14c334ep17b241jsn765d128bb53d',
        'x-rapidapi-host': 'pinnacle-odds.p.rapidapi.com'
      }
    };
    
    fetch(url,options)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      setProducts([...data.specials])
    })
    
  },[])

  return (
    <div className="App">
      <h1>Welcome to Edupoly</h1>
      <ul>
        {
          products?.map((product)=>{
            return <li>{product.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
