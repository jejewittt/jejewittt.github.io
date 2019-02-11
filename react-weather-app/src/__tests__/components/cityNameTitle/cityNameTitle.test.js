import React from 'react';
import ReactDOM from 'react-dom';

import CityNameTitle from '../../../components/cityNameTitle/cityNameTitle';

describe('cityNameTitle component...', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CityNameTitle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create a <h2> tag', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CityNameTitle>Edmonton</CityNameTitle>, div);
    expect(div.firstChild.nodeName).toBe('H2');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the city name correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CityNameTitle>Edmonton</CityNameTitle>, div);
    expect(div.textContent).toBe('Edmonton');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CityNameTitle>Edmonton</CityNameTitle>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});