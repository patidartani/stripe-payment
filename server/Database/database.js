const mongoose = require("mongoose");

const connectDb=async()=>{
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/productDB")
    console.log("Database connected");
  }catch(error){
    console.log(`Error in connecting with database ${error}`)
  }
}
module.exports = connectDb