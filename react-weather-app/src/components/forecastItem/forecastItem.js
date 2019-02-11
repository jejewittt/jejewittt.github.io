/*
This is a 'functional component' that displays one entry of the forecast data:
Icon, High Temperature, Low Temperature, and the day of week label (eg: Mon, Tue, Wed)

It will pull in and reuse the <Temperature> component we have already built. But we will override
the styling so it can fit inside the forecast list item block.

We will also associate the corresponding weather icon by building the correct CSS class name which
maps to "weather-icons" font and style as provided in the /public folder. For more information
please see http://erikflowers.github.io/weather-icons/

Although this component pulls in multiple sources for its rendering task, it still qualifies as a
'functional component' because it does not contain any internal states. It simply displays a bunch
of data based on the props provided by its parent component
*/

import React from 'react';

import Temperature from '../temperature/temperature';

import './forecastItem.scss';

export default (props) => {
  return (
    <li className='forecastItem'>
      <span className={`forecastIcon wi ${props.icon}`}></span>
      <Temperature>{props.high}</Temperature>
      <Temperature>{props.low}</Temperature>
      <p className='forecastDay'>{props.dayOfWeek}</p>
    </li>
  );
};
