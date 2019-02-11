/*
This is a 'functional component' that renders a temperature value with a degree (°) symbol. This
symbol is injected by css which is imported below.
*/

import React from 'react';

import './temperature.scss';

export default (props) => {
  return (
    <div className='cardTemperature'>
      {props.children}
    </div>
  );
};
