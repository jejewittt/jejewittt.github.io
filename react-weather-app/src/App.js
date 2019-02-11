/*
This is the root level component that brings in and renders the entire React application. It contains
an internal state, high level styling, and the declartion of the application's' hierarchy.

changeDisplayCity:
  When this function is triggered, it will perform 2 network calls to retrieve data. For each
  set of returning data, we will set update this component's state with the new information which
  in turn will trigger a re-render of the UI.

componentDidMount:
  This is one of many React component's lifecycle method. After the render cycle of a component, we
  want to fetch the weather information for the DEFAULT_CITY and display it after the page is fully
  initialized.

onCitySelectionChanged:
  This function is being passed down to <CitySelection> as a prop. Upon the change of the dropdown
  selection, the component will trigger this function which in turn allow us to relay the trigger
  to `changeDisplayCity`. Obtaining the user selected value out of the dropdown is critical, so we
  will retrieve it by calling `event.target.value` which referenced to the event caller, in this
  case the dropdown menu.

render:
  This method in a React component is responsible for the rendering. Here we can describe what is
  being rendered, and how information is being used.
*/

import React, { Component } from 'react';

import WeatherCard from './containers/weatherCard';
import CitySelection from './components/citySelection/citySelection';

import { getWeatherByCity, getForecastByCity } from './utils/network';

import './App.scss';

const DEFAULT_CITY = 'edmonton';

class App extends Component {
  state = {
    city: '',
    temperature: '',
    currentCondition: '',
    forecast: [],
  };

  changeDisplayCity(city) {
    getWeatherByCity(city).then((response) => {
      console.log(response)
      this.setState({
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        currentCondition: response.data.weather[0].description,
        cityImage: response.data.photo
      })
    });

    getForecastByCity(city).then((response) => {
      this.setState({
        forecast: response.data.list
      })
    });
  }

  componentDidMount() {
    this.changeDisplayCity(DEFAULT_CITY);
  }

  onCitySelectionChanged(event) {
    this.changeDisplayCity(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <WeatherCard
          city={this.state.city}
          temperature={this.state.temperature}
          currentCondition={this.state.currentCondition}
          cityImage={this.state.cityImage}
          forecast={this.state.forecast}
        >
        </WeatherCard>
      </div>
    );
  }
}

export default App;
