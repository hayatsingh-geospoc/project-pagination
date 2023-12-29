const express = require('express');
const app = express();


app.get('/data',(req,res)=> {
  return res.send("hello js")
})

app.listen(3000,()=> {
    console.log(`Server  is running on Port 3000`)
})