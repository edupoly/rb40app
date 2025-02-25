import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector(state=>state.userR)
  return (
    <div className="App container">
      {!user.role && (<Navbar></Navbar>)}
      
      <Outlet></Outlet>
    </div>
  );
}

export default App;
