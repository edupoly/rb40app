import {  Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Edupoly</h1>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
