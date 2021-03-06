import axios from "axios";
import { useEffect, useState } from "react";
import AvatarWithLetter from "./Avtar";
import User from "./User";
import Messages from "./Messages";

function Home({ user }) {
  const url = "http://localhost:5000";
  const [reciver, setReciver] = useState(null);
  const [users, setUsers] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(async () => {
    const allUser = await axios({
      method: "get",
      url: `${url}/getAllUser`,
    });

    setUsers(allUser.data.data.user);
    console.log(allUser.data.data.user);
  }, []);

  return (
    <div className="mainPage">
      <div className="left">
        <p>Users</p>
        {users.map((e) => (
          <User
            me={user._id}
            view={true}
            name={e.name}
            userId={e._id}
            key={e._id}
            setReciver={setReciver}
          />
        ))}
      </div>
      <div className="middle">
        <Messages
          reciver={reciver}
          user={user}
          setOnlineUsers={setOnlineUsers}
        />
      </div>
      <div className="right">
        <p>Online User</p>
        {onlineUsers.map((e) => (
          <User
            me={user._id}
            name={e.name}
            view={false}
            userId={e.userId}
            key={e.userId}
            setReciver={setReciver}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
