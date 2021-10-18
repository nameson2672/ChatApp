import React from 'react'
import AvatarWithLetter from './Avtar';
import {  message } from "antd";

function User({ name, userId, setReciver, me, view }) {
  const loadMessage = (e) => {
    setReciver(e.target.id);
  };

  if (view === false && userId === me) {
    return '';
  } else {
    return (
      <div
        className="userCard"
        id={userId}
        onClick={
          userId === me
            ? message.error("Select Other user profile rather than your")
            : loadMessage
        }
      >
        {userId === me ? <p>User</p> : ""}
        <div>
          <AvatarWithLetter userName={name} id={userId} />
        </div>
        <p id={userId}>{name}</p>
      </div>
    );
  }
}

export default User
