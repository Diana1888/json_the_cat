const args = process.argv.slice(2);
const catBreed = args[0];
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    return console.log("Request Failed: " + error);
  }

  if (!catBreed) {
    return console.log("Please enter breed name");
  }

  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("There is no breed found");
  }  
});