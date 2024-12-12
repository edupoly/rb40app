import Counter from "./Counter";
import Todolist from "./Todolist";

function App() {
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>Welcome to Edupoly</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
