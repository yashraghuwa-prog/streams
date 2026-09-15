const express=require('express');
const fs=require('fs');

const app=express();
const PORT=8000;

const status=require('express-status-monitor');

app.get("/",(req,res)=>{
    fs.readFile("./sample.txt",(err,data)=>{
        res.end(data);
    });
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
});
