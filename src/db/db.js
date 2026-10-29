const mongoose = require("mongoose");
require("dotenv").config();

const mongooseUrl =  process.env.mongooseUrl
async function connectDB (){

    await mongoose.connect("mongodb+srv://gaganstiwari_db_user:chauIoxvGhIuvlPg@codewithdost.kkuwqal.mongodb.net/")
    console.log("Connected Successfully");
}

module.exports = connectDB;
