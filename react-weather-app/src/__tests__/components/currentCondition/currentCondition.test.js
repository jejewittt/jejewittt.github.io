import React from 'react';
import ReactDOM from 'react-dom';

import CurrentCondition from '../../../components/CurrentCondition/CurrentCondition';

describe('CurrentCondition component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentCondition />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create a <div> tag', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentCondition>Sunny</CurrentCondition>, div);
    expect(div.firstChild.nodeName).toBe('DIV');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentCondition>Edmonton</CurrentCondition>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});
