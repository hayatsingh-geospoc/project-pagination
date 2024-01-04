const jsonData = require('../config/config.json');
const movieName = require('../model/Movie.js');


//console.log(jsonData, 'jsonData');

const dataInsert = () => {
    parsedData.forEach(async (itemData) => {
        const newItem = new movieName(itemData);
        await newItem.save();
      });
};



