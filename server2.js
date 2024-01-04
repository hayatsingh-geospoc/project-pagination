//  this server is not using mongoDB for pagination

const express = require('express');
require('dotenv').config();
const app = express();
const dbConnect = require('./dbConnect');
const port = process.env.PORT || 5500;
const DB_URL = process.env.DB_URL;

const jsonData = require('./config/config.json');
const movieName = require('../model/Movie.js');

console.log(DB_URL);

mongoose.connect(DB_URL, { useNewUrlParser: true }, () => {
  console.log('database connected successfully');
});

const dataInsert = () => {
  jsonData.forEach(async (data) => {
    const newItem = new movieName(data);
    await newItem.save();
  });
};

dataInsert();

// app.get('/data', (req, res) => {
//   console.log(dbConnect());

//   return 'working';
// });

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
