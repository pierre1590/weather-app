<<<<<<< HEAD
import React from "react";
import moment from "moment";
import setIcon from '../../utils/setIcon.js';
import Sunrise from '../../assets/images/alba.gif';
import Sunset from '../../assets/images/tramonto.gif';
import Heart from '../Heart/Heart';
import Wind from '../Wind/Wind';
import './WeatherCity.css';

function WeatherCity({data}){
  function isDay(timezone){
		const hours = Number(moment().tz(timezone).format('HH'));
		return (hours >= 6 && hours <= 6);
	}

    return (
        <div className="city-weather">
          <div className="town-info">  
            <h2>
                {data.location}, {data.country}
            </h2>
            <p>{moment().utc().add(data.timezone, 'hours').format('dddd, MMM Do YYYY, h:mm A')}</p>
           <Heart/>
          </div>
          <div className="weather-units">
                <h1 className="description">{data.description}</h1>
                  {setIcon(data.iconId)}<br/>
                 <h2>{data.temp}°C</h2>
          </div>
          <div className="other-info">
            <img src={Sunrise} alt="Sunrise" className="sunrise"/>  {moment.unix(data.sunrise).utc().add(data.timezone,'hours').format('hh:mm A')}<br/>
            <img src={Sunset} alt="Sunset" className="sunset"/>  {moment.unix(data.sunset).utc().add(data.timezone,'hours').format('hh:mm A')}<br/>
                <span className="info_max">Max: {data.temp_max} °C </span><br/>
                <span className="info_min">Min: {data.temp_min} °C</span><br/>
            <span>Humidity: {data.humidity}%</span><br/>
            Wind: {data.wind_speed} km/h - {data.wind_deg}° {Wind(data.wind_deg)} <br/>
            <span>Pressure: {data.pressure} hPa</span><br/>
            <span>Visibility: {data.visibility} Km</span>
          </div> 
        </div>
    )
}

export default WeatherCity;
=======
import React from "react";
import moment from "moment";

import Sunrise from "../../assets/images/alba.gif";
import Sunset from "../../assets/images/tramonto.gif";

import WeatherIcon from "../WeatherIcon";
import Heart from "../Heart/Heart";
import Wind from "../Wind/Wind";
import "./WeatherCity.css";

function WeatherCity({ data }) {
  return (
    <div className="city-weather">
      <div className="town-info">
        <h2>
          {data.location}, {data.country}
        </h2>
        <p>
          {moment()
            .utc()
            .add(data.timezone, "hours")
            .format("dddd, MMM Do YYYY, h:mm A")}
        </p>
        <Heart />
      </div>
      <div className="weather-units">
        <h1 className="description">{data.description}</h1>
        <WeatherIcon code={data.iconId} timezone={data.timezone} />
        <br />
        <h2>{data.temp}°C</h2>
      </div>
      <div className="other-info">
        <img src={Sunrise} alt="Sunrise" className="sunrise" />{" "}
        {moment
          .unix(data.sunrise)
          .utc()
          .add(data.timezone, "hours")
          .format("hh:mm A")}
        <br />
        <img src={Sunset} alt="Sunset" className="sunset" />{" "}
        {moment
          .unix(data.sunset)
          .utc()
          .add(data.timezone, "hours")
          .format("hh:mm A")}
        <br />
        <span className="info_max">Max: {data.temp_max} °C </span>
        <br />
        <span className="info_min">Min: {data.temp_min} °C</span>
        <br />
        <span>Humidity: {data.humidity}%</span>
        <br />
        Wind: {data.wind_speed} km/h - {data.wind_deg}° {Wind(data.wind_deg)}{" "}
        <br />
        <span>Pressure: {data.pressure} hPa</span>
        <br />
        <span>Visibility: {data.visibility} Km</span>
      </div>
    </div>
  );
}

export default WeatherCity;
>>>>>>> 0f457ee59c2b3bdf36774aad38513f1e4873a635
