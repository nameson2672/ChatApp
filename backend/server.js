import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import colors from "colors";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

// Get environment varianbles from .env
dotenv.config();

// DB import
import connectDB from "./utils/db.js";
// Connect to db
connectDB();

// Inaltized app
const app = express();

//Body parser to parse json
app.use(bodyParser.json());

// Cors
app.use(cors());

// Import routers
import Route from "./routers/route.js";

app.use("/", Route);

// Webshocket setup with express
const servers = http.createServer(app);
const io = new Server(servers, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// Handele all connection for socket

// Storing user which are online
let users = [];

// Add user with user and socket id when they are connected
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId._id) &&
    users.push({ userId:userId._id, name:userId.name, socketId });
};

// Remove user from live status on disconnect
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

// send user who are online
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

// Establish connection
io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    console.log(users)
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

const port = process.env.PORT || 5000;

servers.listen(
  port,
  console.log(`Server is rinning on port ${port}`.blue.bold)
);
