import mongoose from "mongoose";

const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGODBLINK, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }, (e) => {
         console.log(`MongoDB Connected...`.cyan.underline);
    });

   
  } catch (error) {
    console.error(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;