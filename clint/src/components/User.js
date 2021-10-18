import React from "react";
import AvatarWithLetter from "./Avtar";
import { message } from "antd";

function User({ name, userId, setReciver, me, view }) {
  const loadMessage = (e) => {
    if (userId === me) {
      message.error("Select other user rather than your");
    } else {
      setReciver(e.target.id);
    }
  };

  if (view === false && userId === me) {
    return "";
  } else {
    return (
      <div className="userCard" id={userId} onClick={loadMessage}>
        {userId === me ? <p>User</p> : ""}
        <div>
          <AvatarWithLetter userName={name} id={userId} />
        </div>
        <p id={userId}>{name}</p>
      </div>
    );
  }
}

export default User;
