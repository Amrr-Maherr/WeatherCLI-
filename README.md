# WeatherNode 🌍⛅

WeatherNode is a simple **Node.js** CLI application that fetches real-time weather data for any location. It uses the **Mapbox API** to get geographic coordinates and the **WeatherAPI** to retrieve weather details.

## Features 🚀

- Get the current weather of any location by providing its name.
- Uses **Mapbox API** to fetch latitude and longitude.
- Uses **WeatherAPI** to retrieve real-time weather data.
- Built with **Node.js** and runs from the command line.

## Installation 🛠️

Make sure you have [Node.js](https://nodejs.org/) installed, then clone this repository and install dependencies:

```sh
git clone https://github.com/your-username/WeatherNode.git
cd WeatherNode
npm install
```

## Usage 📌

Run the following command to get weather data for a specific location:

```sh
node app.js get --place_name="Cairo"
```

Replace `"Cairo"` with any city or place name.

## Example Output 🗉

```sh
Coordinates of Cairo: Longitude: 31.2357, Latitude: 30.0444  
Weather in Cairo:  
Temperature: 25°C  
Condition: Clear sky  
```

## Dependencies 📦

- [Node.js](https://nodejs.org/)
- [Yargs](https://www.npmjs.com/package/yargs) - For CLI command handling
- [Request](https://www.npmjs.com/package/request) - For making HTTP requests

## License 📛

This project is open-source and available under the **MIT License**.

---

Made with ❤️ using Node.js

