import { TextField } from "./textField";

function App() {
  return (
    <div>
      <TextField
        text={"hello"}
        person={{ firstName: "Quang", lastName: "Nguyen" }}
      />
    </div>
  );
}

export default App;
