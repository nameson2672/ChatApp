
import Login from "./components/Login";
import { useState } from "react";

function App() {
   const [user, setUser] = useState(null);
  return (
    <div className="container">
      { !user? <Login setUser={setUser} /> : <h2>Hellow</h2>
      }</div>
  );
}

export default App;
