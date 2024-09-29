// dotenv require
require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.get("/youtube",(req,res)=>{
    res.json({
        "name":"Md.Tamim",
        rol:20
    })
})

app.listen(process.env.PORT,()=>{
    console.log("server is running on the port",port)
})
