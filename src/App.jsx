import React, { useEffect, useRef } from "react";
import Chinna from "./Chinna";
function App() {

  var dref = useRef();
  var kref = useRef();
  var cref = useRef();
  var eref = useRef();
  useEffect(()=>{
    dref.current.focus()
  },[])
  return (
    <div className="p-4 border border-danger border-4 m-3">
      <h1>Welcome to Edupoly</h1>
      <input type="text" ref={dref} onKeyUp={(e)=>{
        if(e.key==='Enter'){
          kref.current.focus()
        }
      }}/>
      <br />
      <input type="text" ref={kref} onKeyUp={(e)=>{
        if(e.key==='Enter'){
          cref.current.focus();
        }
      }}/>
      <br />
      <Chinna x={103} ref={cref} ></Chinna>
      <button onClick={()=>{dref.current.focus()}}>show text</button>
    </div>
  );
}

export default App;
