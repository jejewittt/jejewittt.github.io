/*
This helper file is responsible for fetching weather & forecast data from a given city name.

We will be using axios network helper to perform these api calls. https://github.com/axios/axios

At the end of each function call, we will return resulting Promise object created by axios back to
the consumer. It will be up to the consumer (caller) to handle success/failure of these network calls.
*/

import axios from 'axios';

import { CITY_WEATHER_URL, CITY_FORECAST_URL } from '../config/endpoints';

export const getWeatherByCity = (city) => {
  const url = CITY_WEATHER_URL + city;
  return axios.get(url)
};

export const getForecastByCity = (city) => {
  const url = CITY_FORECAST_URL + city;
  return axios.get(url);
};
