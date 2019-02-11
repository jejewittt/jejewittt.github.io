import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../App';

// See more at https://reactjs.org/docs/shallow-renderer.html

describe('Main App component', () => {
  it('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();  
    const div = document.createElement('div');
    ReactDOM.render(result, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
  
    const div = document.createElement('div');
    ReactDOM.render(result, div);
    expect(div.innerHTML).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});




