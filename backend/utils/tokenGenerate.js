import jwt from "jsonwebtoken";

const generateToken = (uid) => {

 return jwt.sign({ uid }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

} 

export default generateToken;
