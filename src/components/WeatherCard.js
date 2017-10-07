import React from "react";

//import PropTypes from 'prop-types'

const WeatherCard = ({...props}) => { 
  const {elements, activeElement} = props;
  const weatherData = elements[activeElement]
   
  const weather = weatherData.weather[0];
  const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
  return (
    <div>
      <h1>
        {weather.main} in {weatherData.name}
        <img src={iconUrl} alt={weatherData.description} />
      </h1>
      <p>Current: {weatherData.main.temp}°</p>
      <p>High: {weatherData.main.temp_max}°</p>
      <p>Low: {weatherData.main.temp_min}°</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
