const express = require('express');
const app = express();
const mongoose  = require('mongoose');


app.get('/data',(req,res)=> {
  return res.send("hello js")
});

mongoose.connect('mongodb+srv://amit_singh:kya_hal_hai_tere@cluster0.jpqo2bq.mongodb.net/HAYAT_NEW_DB',,{
    useNewUrlParser: true,
        useUnifiedTopology: true,
  }).then(()=> {
    console.log("Mongodb connected");
  }).catch((err)=>{
    console.log(err)
  });

app.listen(3000,()=> {
    console.log(`Server  is running on Port 3000`)
});