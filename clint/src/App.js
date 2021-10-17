
import Login from "./components/Login";
import Home from './components/Home'

import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   if (user === null) {
  //     setUser({
  //       email: "namesongaudel.ng@gmail.com",
  //       name: "Nameson Gaudel",
  //       _id: "6161197ce937c6c9451c555f",
  //     });
  //   }
  // }, [])
  
  return (
    <div className="container">
      {!user ? <Login setUser={setUser} /> : <Home user={ user}/>}
    </div>
  );
}

export default App;
