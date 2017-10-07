import {fetchAllCities} from './API.js'

export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
export const ACTIVE_ID = "ACTIVE_ID";


export const receiveWeather = (data) => ({
  type: RECEIVE_WEATHER,
  data
});

export const requestWeather = () => ({
  type: REQUEST_WEATHER
});


export const SetActiveElement = id => ({
  type: ACTIVE_ID,
  id
});

const fetchWeather = () => async dispatch => {
  dispatch(requestWeather)
  const data = await fetchAllCities()
  
  dispatch(receiveWeather(data))
};


export const getWeather = () => dispatch => {
  const localDate = localStorage.getItem("data");
  if (!localDate) {
    dispatch(fetchWeather());
  } else {
    const data = JSON.parse(localDate);
    dispatch(receiveWeather(data.elements));
  }
};
