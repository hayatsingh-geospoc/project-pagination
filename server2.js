//  this server is not using mongoDB for pagination

const express = require('express');
require('dotenv').config();
const app = express();
const dbConnect = require('./dbConnect');
const port = process.env.PORT || 5500;
const DB_URL = process.env.DB_URL;


console.log(DB_URL, 'DB_URL');

const users = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
  { id: 3, name: 'user3' },
  { id: 4, name: 'user4' },
  { id: 5, name: 'user5' },
  { id: 6, name: 'user6' },
  { id: 7, name: 'user7' },
];

app.get('/data', (req, res) => {
  console.log(dbConnect());

  return 'working';
});

app.get('/users', (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < users.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = users.slice(startIndex, endIndex);
  res.json(results);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
