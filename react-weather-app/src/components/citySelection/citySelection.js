/*
This is a 'functional component' that renders a dropdown selection box. The event handler (onChange)
is passed in as part of the props, so it does not need to care about handling the user input other
than executing a function provided its parent component.

It will also associate the rendering with the stylesheet imported below.
*/

import React from 'react';

import './citySelection.scss';

export default (props) => {
  return (
    <header>
      <label htmlFor="citySelection">Select a city:</label>
      <div className="selectDropdown">
        <select id="citySelection" onChange={props.selectionChangeHandler}>
          <option value='edmonton'>Edmonton</option>
          <option value='vancouver'>Vancouver</option>
          <option value='calgary'>Calgary</option>
          <option value='montreal'>Montreal</option>
          <option value='toronto'>Toronto</option>
        </select>
      </div>
    </header>
  );
};
