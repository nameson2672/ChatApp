import React from 'react'
import AvatarWithLetter from './Avtar';

function User({ name, userId, setReciver }) {
  const loadMessage = (e) => {
    setReciver(e.target.id);
  };
  return (
    <div className="userCard" id={userId} onClick={loadMessage}>
      <div>
        <AvatarWithLetter userName={name} id={userId} />
      </div>
      <p id={userId}>{name}</p>
    </div>
  );
}

export default User
