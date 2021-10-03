import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import colors from "colors";

// Get environment varianbles from .env 
dotenv.config();

// DB import 
import connectDB from './utils/db.js'
// Connect to db
connectDB();

// Inaltized app
const app = express();

//Body parser to parse json
app.use(bodyParser.json());

// Import routers
import Route  from './routers/route.js'

app.use('/', Route);


const port = process.env.PORT || 5000

app.listen(port,
  console.log(`Server is rinning on port ${port}`.blue.bold));
