import React from "react";
import moment from "moment";
import setIcon from '../../utils/setIcon.js';
import Sunrise from './alba.gif';
import Sunset from './tramonto.gif';
import './WeatherCity.css';

function WeatherCity({data}){
    return (
        <div className="city-weather">
          <div className="town-info">  
            <h2>
                {data.location}, {data.country}
            </h2>
            <p>{moment().format('dddd, MMM Do YYYY, h:mm a')}</p>
          </div>
          <div className="weather-units">
                <h1 className="description">{data.description}</h1>
                {setIcon(data.iconId)}<br/>
                <span className="info_max">{Math.ceil(data.temp_max)} °C </span> - <span className="info_min">{Math.ceil(data.temp_min)} °C</span>
          </div>
          <div className="other-info">
            <img src={Sunrise} alt="Sunrise" className="sunrise"/>{data.sunrise}<br/>
            <img src={Sunset} alt="Sunset" className="sunset"/> {data.sunset}<br/>
            <span>Humidity: {data.humidity}%</span><br/>
            <span>Wind speed: {Math.round(data.wind_speed*3.6)} km/h</span><br/>
            <span>Wind direction:{data.wind_deg}</span><br/>
            <span>Pressure: {data.pressure}hPa</span><br/>
            <span>Visibility: {Math.floor(data.visibility/1000)} Km</span>
          </div> 
        </div>
    )
}

export default WeatherCity;