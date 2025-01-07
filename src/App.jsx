import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Edupoly</h1>
      <Products></Products>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
