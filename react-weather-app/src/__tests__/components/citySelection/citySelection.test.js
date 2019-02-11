import React from 'react';
import ReactDOM from 'react-dom';

import CitySelection from '../../../components/CitySelection/CitySelection';

describe('CurrentCondition component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CitySelection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CitySelection/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});
