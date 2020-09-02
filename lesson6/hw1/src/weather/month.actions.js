export const MONTH_DATA = 'MONTH_DATA';
import { getWeatherData } from './month.gateway.js'

export const monthDataRecieved = (weatherData) => {
    return {
        type: MONTH_DATA,
        payload: {
            weatherData
        }
    }
}


export const getWeatherDataAction = () => {
    return (dispatch) => {
        getWeatherData().then((weatherData) =>
        dispatch(monthDataRecieved(weatherData))
      );
    };
  };