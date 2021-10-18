import React, { useState, useEffect } from "react";
import { Avatar, Button } from "antd";

const UserList = ["U", "Lucy", "Tom", "Edward"];
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
const GapList = [4, 3, 2, 1];

const AvatarWithLetter = ({ userName }) => {
  const [user, setUser] = useState();
  const [color, setColor] = useState(ColorList[1]);
  const [gap, setGap] = useState(GapList[0]);

  useEffect(() => {
    if (userName) {
      setUser(userName[0].toUpperCase())
    }
  }, [userName])

  return (
    <>
      <Avatar
        style={{
          backgroundColor: color,
          verticalAlign: "middle",
        }}
        size={40}
        gap={gap}
        className="avtarText"
      >
        {user}
      </Avatar>
    </>
  );
};

export default AvatarWithLetter;