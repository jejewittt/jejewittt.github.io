import MockedAxios from 'axios';

import { CITY_WEATHER_URL, CITY_FORECAST_URL } from '../../config/endpoints';
import { getWeatherByCity, getForecastByCity } from '../../utils/network';

describe('network helper util', () => {
  it('should append the city name correctly for weather data', (done) => {
    getWeatherByCity('calgary')
      .then(data => {
        expect(data.outboundURL).toBe(CITY_WEATHER_URL + 'calgary');
        done();
      })
  });

  it('should append the city name correctly for forecast data', (done) => {
    getForecastByCity('calgary')
      .then(data => {
        expect(data.outboundURL).toBe(CITY_FORECAST_URL + 'calgary');
        done();
      })
  });
});