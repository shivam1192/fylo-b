const express = require("express");
const app = express();
const data = require("./data.json");
const client = require("./db.js");

let port = process.env.PORT || 3000;

app.use(express.json());
app.get("/",async(req,res)=>{
  try{
    const q = await client.query("SELECT Name FROM banks");
    res.json(q.rows);
  }catch(error){
    console.log("hello wor")
    console.log(error);
  }
})
app.get("/player",(req,res)=>{
  res.send(data);
})
app.listen(port,()=>{
  console.log("Your server is running on port 3000");
})
