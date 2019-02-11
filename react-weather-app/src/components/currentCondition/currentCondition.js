/*
This is a 'functional component' where its sole purpose is to render a string (current weather
condition) that is provided by the parent component. In this case, the weatherCardTop container.

It will also associate the rendering with the stylesheet imported below.
*/

import React from 'react';

import './currentCondition.scss';

export default (props) => {
  return (
    <div className='currentCondition'>
      {props.children}
    </div>
  );
};
