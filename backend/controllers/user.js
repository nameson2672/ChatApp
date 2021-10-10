import jwt from "jsonwebtoken";
import User from "../models/User.js";
import generateToken from "../utils/tokenGenerate.js";

// SignUp user
const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data)
    const isUserAlradyExist = await User.findOne({ email: data.email });
    console.log(!isUserAlradyExist);
    if (!isUserAlradyExist) {
      const newUser = await User.create({ ...data });
      console.log(newUser);
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

// Sign in route

const getUser = async (req, res, next) => {
  console.log(req.body)
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.findOne({ email: email });
    console.log(user);

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        sucess: true,
        data: {
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    } else {
      res.status(400).json({
        sucess: false,
        data: {},
        error: "email or password didn't match",
      });
    }
  } catch (error) {
    res.status(500).json({
      sucess: false,
      data: {},
      error: error.message,
    });
  }
};

// Get all user with name and id
const getUsers = async (req, res) => {
  const user = await User.find({},"-password");
  res.status(200).json({
    sucess: true,
    data: {
      user
    }
  })
}

// Get specific user 
const getReciver = async (req, res) => {
  console.log(req.params.reciver);
  const user = await User.findById(req.params.reciver);
  console.log("helolow");
  res.status(200).json({
    sucess: true,
    data: user,
  });
}

export { createUser, getUser, getUsers, getReciver };
