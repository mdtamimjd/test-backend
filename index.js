// dotenv require
require("dotenv").config();
const express = require("express");
const app = express();
const port =process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.get("/myinfo",(req,res)=>{
    res.json({
        "My name": "Md Tamim Islam",
        "Study:": 12,
        "Collage name":"Hafi para collage",
        "Age":20
    })
})
app.get("/youtube",(req,res)=>{
    res.json({
        "name":"Md.Tamim",
        rol:20
    })
})

app.listen(port,()=>{
    console.log("server is running on the port",port)
})
