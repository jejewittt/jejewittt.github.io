/*
This is a standard React component responbile for holding the top & bottom portion of the weather
card. It also relays the click event on the card top, to toggle the active/inactive state which
in return show or hide the forecast (bottom) weather card.

Arguably this component may not be needed if we distribute its parts to the parent and children
components. This approach can be viewed as optional, but I usually prefer better separations
to achieve better code organizations.
*/

import React from 'react';

import CardTitle from '../components/cityNameTitle/cityNameTitle';
import CardDescription from '../components/currentCondition/currentCondition';
import CardTemperature from '../components/temperature/temperature';

import generateForecasts from './helpers/generateForecast';

import './weatherCard.scss';

class WeatherCard extends React.Component {
  state = {
    backgroundIsActive: false
  };

  onCardClick() {
    this.setState({
      backgroundIsActive: !this.state.backgroundIsActive
    })
  }

  getCardClassNames() {
    let classNames = 'card ';
    if (this.state.backgroundIsActive) {
      classNames += 'isActive';
    }
    return classNames;
  }

  render(props) {
    return (
      <div className={this.getCardClassNames()} onClick={this.onCardClick.bind(this)}>
        <div className='cardUpperPortion' style={{"backgroundImage": `url(${this.props.cityImage})`}}>
          <div className='cardInfo'>
            <CardTemperature>
              {this.props.temperature}
            </CardTemperature>
            <CardDescription>
              {this.props.currentCondition}
            </CardDescription>
          </div>
          <CardTitle>
            {this.props.city}
          </CardTitle>
        </div>
      </div>
    )
  }
};

export default WeatherCard;
