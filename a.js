const express = require("express")
const app = express()
app.get("/",(req,res)=>{
  res.send({message:"hi sayan",data:"ok"})
})
app.listen(3000,()=>{
  console.log("connected to port : 3000")
})