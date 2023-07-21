const weatherAPI = require('./get-weather');

const messageWeather = () => {
  let weather = weatherAPI.getWeather('C');
  return `Today weather is ${weather}, have a nice day!`;
};

module.exports = { messageWeather };
