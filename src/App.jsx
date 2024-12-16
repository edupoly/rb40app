import { useState } from "react";
function App() {
  var [x,setX] = useState(1);
  function inc(){
    setX((pv)=>{return pv+1})
  }
  function inc10(){

    setTimeout(()=>{
      setX((pv)=>{return pv+1})
    },5000)

    setX(x+5)

  }
  return (
    <div className="m-4">
      <h1>Count:{x}</h1>
      <button onClick={()=>{inc()}}>Increment</button>
      <button onClick={()=>{inc10()}}>Increment10</button>
    </div>
  );
}

export default App;
