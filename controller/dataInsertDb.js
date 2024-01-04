const jsonData = require('../config/config.json');
const movieName = require('../model/Movie.js');

//console.log(jsonData, 'jsonData');

const dataInsert = () => {
  jsonData.forEach(async (itemData) => {
    const newItem = new movieName(itemData);
    await newItem.save();
  });
};

module.exports = dataInsert;
