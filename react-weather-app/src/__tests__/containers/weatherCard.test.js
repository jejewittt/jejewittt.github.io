import React from 'react';
import ReactDOM from 'react-dom';

import generateForecasts from '../../containers/helpers/generateForecast';

import WeatherCard from '../../containers/weatherCard';
import CardTemperature from  '../../components/temperature/temperature';
import CardDescription from  '../../components/currentCondition/currentCondition';
import CardTitle from  '../../components/cityNameTitle/cityNameTitle';

const mockForecastData = [{
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}];

describe('WeatherCard container...', () => {
  const staticWeatherCard = (
    <WeatherCard
      city="somewhere"
      temperature="30"
      currentCondition="clear"
      cityImage="http://example.com/image.jpg"
      forecast={[]}
    />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCard, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCard, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('WeatherCard bottom portion...', () => {
  const staticWeatherCardBottom =
    <div className='cardBottomPortion'>
      <div className='cardDetail'>
        <ul className='forecastsWrapper'>
          {generateForecasts(mockForecastData)}
        </ul>
      </div>
    </div>;

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('WeatherCard top component...', () => {
  const staticWeatherCardBottom =
    <div className='cardUpperPortion' style={{"backgroundImage": 'url("/assets/images/testimage.jpg")'}}>
      <div className='cardInfo'>
        <CardTemperature>10</CardTemperature>
        <CardDescription>Clear</CardDescription>
      </div>
      <CardTitle>Somewhere</CardTitle>
    </div>;

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create the background image inline style correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    expect(div.firstChild.getAttribute('style')).toBe('background-image: url(/assets/images/testimage.jpg);');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});