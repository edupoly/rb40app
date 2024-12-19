import { useState } from "react";
import StudentForm from "./StudentForm";

function App() {
  var [s,setS] = useState('')
  return (
    <div className="m-5 border border-2 border-danger p-2">
      <h1>Welcome to Edupoly</h1>
      <input type="text" onKeyUp={(e)=>{setS(e.target.value)}}/>
      <h2>{s}</h2>
      <StudentForm></StudentForm>
    </div>
  );
}

export default App;
// function comp
// class comp

// container comp(smart comp)
  // todolist comp//data and logic
// presentational comp(dumb comp)
  // todo comp // template// np logic

// controlled comp
// uncontrolled comp