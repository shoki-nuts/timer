const express = require("express");
const cors = require('cors');

const jsonData = require("./task.json");
const app = express();

const PORT = 3001;

app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true, 
        optionsSuccessStatus: 200
}));

app.get('/tasks',(req,res)=>{
        res.json(jsonData);
});

app.listen(PORT, console.log(`server liten on ${PORT}`));