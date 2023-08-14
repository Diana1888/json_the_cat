const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //Check if there is broke URL or error
    if (error || response.statusCode !== 200) {
      callback("Request Failed: " + error);
    }

    //Check if there is no input
    if (!breedName) {
      callback("Please enter breed name", null);
      return;
    }

    const data = JSON.parse(body);
    //Check if there is data then return the description
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("There is no such breed", null);
    }
  });
};

module.exports = { fetchBreedDescription };