import Jwt from "jsonwebtoken";
import User from "../models/User.js";
import generateToken from "../utils/tokenGenerate.js";

// SignUp user
const createUser = async (req, res, next) => {
  try {
    const data = req.body.data;
      const isUserAlradyExist = await User.findOne({ email: data.email });
      console.log(isUserAlradyExist)
    if (!isUserAlradyExist) {
      const newUser = await User.create({ ...data });
      if (newUser) {
        res.status(200).json({
          success: true,
          data: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser._id),
          },
        });
      } else {
        res.status(500).json({
          success: false,
          data: {},
          error: "Something went wrong",
        });
      }
      next();
    }
    res.status(400).json({
      success: false,
      data: {},
      error: "User already exist please login",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: {},
      error: error.message,
    });
  }
};

export { createUser };
