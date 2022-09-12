const express = require('express');
const app = express();
const port = 3030; 
const path= require('path')

app.use(express.static('public')); 
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'views','index.html' ))
})

app.listen(port, ()=>{
    console.log(`server running on port: localhost:${port}`);
})