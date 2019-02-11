/*
This is a 'functional component' where its sole purpose is to render a string (city name) that is
provided by the parent component. In this case, the weatherCardTop container.

It will also associate the rendering with the stylesheet imported below.
*/

import React from 'react';

import './cityNameTitle.scss';

export default (props) => {
  return (
    <h2 className='cityNameTitle'>
      {props.children}
    </h2>
  );
};
