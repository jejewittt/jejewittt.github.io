import React from 'react';
import ReactDOM from 'react-dom';

import ForecastItem from '../../../components/ForecastItem/ForecastItem';

describe('ForecastItem component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ForecastItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with props correctly', () => {
    const div = document.createElement('div');
    const forecastItem = (
      <ForecastItem icon="clear" high="30" low="-30" dayOfWeek="Fri"/>
    );
    ReactDOM.render(forecastItem, div);
    expect(div.firstChild.childNodes[0].getAttribute('class')).toBe('forecastIcon wi clear');
    expect(div.firstChild.childNodes[1].textContent).toBe('30');
    expect(div.firstChild.childNodes[2].textContent).toBe('-30');
    expect(div.firstChild.childNodes[3].textContent).toBe('Fri');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    const forecastItem = (
      <ForecastItem icon="clear" high="30" low="-30" dayOfWeek="Fri"/>
    );
    ReactDOM.render(forecastItem, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});
