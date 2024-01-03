const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
  mongoose.connect(process.env.PORT, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log('Connected to DB successfully');
  });

  mongoose.connection.on('Error', (err) => {
    console.log('Error while connecting to Database', err);
  });
};
