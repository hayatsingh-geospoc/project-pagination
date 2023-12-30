const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const Port = process.env.PORT || 3000;

app.get('/data', (req, res) => {
  return res.send('hello js');
});

const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
  { id: 3, name: 'Bob Smith', age: 40 },
  { id: 4, name: 'Alice Brown', age: 20 },
  { id: 5, name: 'Mike Johnson', age: 35 },
  { id: 6, name: 'Sara Lee', age: 28 },
  { id: 7, name: 'David Green', age: 45 },
  { id: 8, name: 'Emily Davis', age: 32 },
  { id: 9, name: 'Tom Wilson', age: 27 },
  { id: 10, name: 'Linda Wilson', age: 33 },
];

const pageSize = 5;

app.get('/api/users', (req, res) => {
  const pageNumber = req.query.page || 1; // Get the current page number from the query parameters
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const users = data.slice(startIndex, endIndex);

  res.json({ users, total: data.length });
});

mongoose
  .connect(
    'mongodb+srv://amit_singh:kya_hal_hai_tere@cluster0.jpqo2bq.mongodb.net/HAYAT_NEW_DB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Mongodb connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(Port, () => {
  console.log(`Server  is running on Port 3000`);
});
