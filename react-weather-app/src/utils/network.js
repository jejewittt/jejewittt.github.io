/*
This helper file is responsible for fetching weather & forecast data from a given city name.

We will be using axios network helper to perform these api calls. https://github.com/axios/axios

At the end of each function call, we will return resulting Promise object created by axios back to
the consumer. It will be up to the consumer (caller) to handle success/failure of these network calls.
*/

import axios from 'axios';

import { CITY_WEATHER_URL, CITY_FORECAST_URL } from '../config/endpoints';

// app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });



export const getWeatherByCity = () => {
  const url = "https://cors.io/?http://199.116.235.137:8080/weather/";
  return axios.get(url); 
};

export const getForecastByCity = (city) => {
  const url = "https://cors.io/?http://199.116.235.137:8080/weather/";
  return axios.get(url);
};
