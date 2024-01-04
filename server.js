//  this server is not using mongoDB for pagination

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5500;
const DB_URL = process.env.DB_URL;
const jsonData = require('./config/config.json');
const dataInsert = require('./controller/dataInsertDb.js');
const routes = require('./routes/routes.js');

app.use(express.json());

app.use('/api', routes);

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
