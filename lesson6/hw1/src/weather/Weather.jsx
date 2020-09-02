import React from 'react'
import { connect } from 'react-redux';
import {getWeatherData} from './weather.actions.js'


class Weather extends React.Component {
    componentDidMount() {
        this.props.getWeatherData();
      }
    render() {
        return (
            <main className="weather">
                <h1 className="weather__title">Weather data</h1>
                <ul className="cities-list">
                 {this.props.weatherData.weather.map((city) => {
                     <li key={city.id} className="city">
                     <span className="city__name">{city.city}</span>
                     <span className="city__temperature">{city.temp}</span>
                   </li>
                 })}
                </ul>
            </main>
        );
    }
};

const mapState = state => {
    return {
        weatherData: state
    }
}
const mapDispatch = {
    getWeatherData: getWeatherData
}

export default connect(mapState, mapDispatch)(Weather);