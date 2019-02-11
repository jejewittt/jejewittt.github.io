/*
URLs for retrieving weather information. Notice these links are incomplete as it ends with "?city="

We will be appending the city name to the end of the string prior to our network calls, so the backend
knows which city we are inquiring.

The information is cached from https://openweathermap.org, due to API limitation we will use static
copies of the weather data for now.

This static endpoint is defaulted to "edmonton", with 4 other possible query inputs:
"vancouver", "montreal", "calgary", and "toronto".
*/

export const CITY_WEATHER_URL = 'https://sjtz41wo3m.execute-api.us-east-1.amazonaws.com/weather/?city=';

export const CITY_FORECAST_URL = 'https://9q8kp49olb.execute-api.us-east-1.amazonaws.com/forecast/?city=';
