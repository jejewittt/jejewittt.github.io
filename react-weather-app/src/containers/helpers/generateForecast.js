/*
This function is responsible for generating an array of <ForecastItem>(s) as well as the
corresponding label for each day of the week.

It will loop through the forecast array, create an instance of <ForecastItem> with the data as props,
and then return it back to the caller. 

Because the next day is always going to be different, we will do a simple math calculation to
determine which day label we should start the forecast with. (eg: If today is Saturday, then the
forecast should say: Sun Mon Tue Wed Thu).
*/


import React from 'react';

import ForecastItem from '../../components/forecastItem/forecastItem';

export default (forecast) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let dailyForecasts = [];

  dailyForecasts = forecast.map((dayInfo, index) => {
    const iconType = dayInfo.weather[0].main.toLowerCase();
    return (
      <ForecastItem
        key={index}
        icon={`wi-wu-${iconType}`}
        high={Math.round(dayInfo.temp.max)}
        low={Math.round(dayInfo.temp.min)}
        dayOfWeek={days[((new Date().getDay() + index) % 7)]}>
      </ForecastItem>
    );
  });

  return dailyForecasts;
}