
import Login from "./components/Login";
import AvatarWithLetter from './components/Avtar'
import { useState } from "react";

function App() {
   const [user, setUser] = useState(null);
  return (
    <div className="container">
      {!user ? <Login setUser={setUser} /> : <AvatarWithLetter userName={user.name[0]}/>}
    </div>
  );
}

export default App;
