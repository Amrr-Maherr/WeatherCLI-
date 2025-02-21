const request = require("request");

function GetData(place_name) {
  // API to get the coordinates of the place
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place_name}.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw`;

  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      return console.log("Error connecting to the server.");
    } else if (!response.body.features || response.body.features.length === 0) {
      return console.log("Location not found.");
    }

    const long = response.body.features[0].center[0];
    const lat = response.body.features[0].center[1];

    console.log(
      `Coordinates of ${place_name}: Longitude: ${long}, Latitude: ${lat}`
    );

    // API to get weather data using the coordinates
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=fcb705eb5e0845eab9c203644251702&q=${lat},${long}&aqi=no`;

    request({ url: weatherUrl, json: true }, (error, response) => {
      if (error) {
        return console.log("Error fetching weather data.");
      } else if (response.body.error) {
        return console.log("Invalid input:", response.body.error.message);
      }

      const weather = response.body.current;
      console.log(`Weather in ${place_name}:`);
      console.log(`Temperature: ${weather.temp_c}°C`);
      console.log(`Condition: ${weather.condition.text}`);
    });
  });
}

module.exports = { GetData };
