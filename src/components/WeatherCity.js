import React from "react";
import moment from "moment";
import setIcon from '../utils/setIcon.js';
import '../App.css'

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
                <span className="info">{Math.ceil(data.temp_max)} ° C / {Math.ceil(data.temp_min)} ° C</span>
          </div>
          <div >
              Sunrise:{data.sunrise}<br/>
              Sunset:{data.sunset}
          </div>
          
        </div>
    )
}

export default WeatherCity;