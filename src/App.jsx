import { Autocomplete, Button,TextField } from "@mui/material";

function App() {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];
  return (
    <div className="App">
      <h1>Welcome to Edupoly</h1>
      <Button variant="contained">Welcome to Material UI Button</Button>
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 900 }}

        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}

export default App;
