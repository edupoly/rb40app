
import First from "./First";
import { ccontext } from "./ComContext";

function App() {
  console.log(ccontext)
  var ob1 = {firstname:"sameer"}
  return (
    <ccontext.Provider value={ob1}>
      <div className='border border-2 border-info p-2 m-2'>
        <h1>Welcome to Edupoly</h1>
        <First></First>
      </div>
    </ccontext.Provider>
  );
}

export default App;
