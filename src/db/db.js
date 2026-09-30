const mongoose = require("mongoose");
require("dotenv").config();

const mongooseUrl =  process.env.mongooseUrl
async function connectDB (){

    await mongoose.connect()
    console.log("Connected Successfully");
}
