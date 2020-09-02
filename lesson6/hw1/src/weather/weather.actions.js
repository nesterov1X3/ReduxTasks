export const MONTH_DATA = 'MONTH_DATA';
import { getData } from './month.gateway.js'

export const monthDataRecieved = (weatherData) => {
    return {
        type: MONTH_DATA,
        payload: {
            weatherData
        }
    }
}


export const getWeatherData = () => {
    return (dispatch) => {
        getData().then((weatherData) =>
        dispatch(monthDataRecieved(weatherData))
      );
    };
  };