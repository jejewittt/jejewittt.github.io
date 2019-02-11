import React from 'react';
import ReactDOM from 'react-dom';

import Temperature from '../../../components/Temperature/Temperature';

describe('ForecastItem component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Temperature>26</Temperature>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the prop value (temperature) correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Temperature>26</Temperature>, div);
    expect(div.firstChild.textContent).toBe('26');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Temperature>26</Temperature>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
  
});
