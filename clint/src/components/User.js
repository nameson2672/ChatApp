import React from 'react'
import AvatarWithLetter from './Avtar';

function User({ name, userId }) {
    console.log(name);
    const loadMessage = (e) => {
        console.log(e.target);
    }
    return (
        <div className="userCard" onClick={loadMessage}>
            <div>
                <AvatarWithLetter userName={name} />
            </div>
            <p>{name}</p>
      </div>
    );
}

export default User
