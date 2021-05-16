const express = require("express");
const app = express();
const data = require("./data.json");
let port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
  res.send("hello world");
})
app.get("/player",(req,res)=>{
  res.send(data);
})
app.listen(port,()=>{
  console.log("Your server is running on port 3000");
})
