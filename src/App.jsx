import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div className="m-2 p-4 border border-3 border-danger">
      <h1>This is App component</h1>
      <Link to="/aboutus">About Edupoly</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/contactus">Contactus</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/countries">Countries</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/countries3">Countries3</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
