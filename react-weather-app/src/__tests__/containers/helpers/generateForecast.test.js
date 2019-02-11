import generateForecast from '../../../containers/helpers/generateForecast';

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

describe('generateForecast helper function', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-extend-native
    Date.prototype.getDay = jest.fn(() => 3) // Force Date.getDay to always return Wednesday
  });

  afterEach(() => {
    Date.prototype.getDay.mockReset();
  });
  
  it('should return an array of forecast items', () => {
    const forecastList = generateForecast(mockForecastData);
    expect(forecastList.length).toBe(5);
    expect(typeof forecastList[0].props).toBe('object');
  });

  it('should render each forcast items correctly', () => {
    const forecastList = generateForecast(mockForecastData);
    forecastList.forEach(forecastItem => {
      expect(forecastItem.props.icon).toBe('wi-wu-snow');
      expect(forecastItem.props.high).toBe(-2);
      expect(forecastItem.props.low).toBe(-6);
      return true;
    });
  });

  it('should return the correct list of days', () => {
    const forecastList = generateForecast(mockForecastData);
    expect(forecastList[0].props.dayOfWeek).toBe('Thu');
    expect(forecastList[1].props.dayOfWeek).toBe('Fri');
    expect(forecastList[2].props.dayOfWeek).toBe('Sat');
    expect(forecastList[3].props.dayOfWeek).toBe('Sun');
    expect(forecastList[4].props.dayOfWeek).toBe('Mon');    
  });

});
