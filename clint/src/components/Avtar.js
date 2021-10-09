import React, { useState } from "react";
import { Avatar, Button } from "antd";

const UserList = ["U", "Lucy", "Tom", "Edward"];
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
const GapList = [4, 3, 2, 1];

const AvatarWithLetter = ({ userName }) => {
  const [user, setUser] = useState(userName);
  const [color, setColor] = useState(ColorList[Math.floor(Math.random() * 4)]);
  const [gap, setGap] = useState(GapList[0]);

  return (
    <>
      <Avatar
        style={{
          backgroundColor: color,
          verticalAlign: "middle",
        }}
        size="large"
        gap={gap}
      >
        {user}
      </Avatar>
    </>
  );
};

export default AvatarWithLetter;