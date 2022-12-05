const express = require("express");
const jsonData = require("./task.json")
const app = express();

const PORT = 3001;

app.get('/tasks',(req,res)=>{
        res.json(jsonData)
});

app.listen(PORT, console.log('server liten on',PORT));