import React from "react";
import "./Forecast.css";
import moment from "moment";
import WeatherIcon from "../WeatherIcon";

function Forecast({ forecast }) {
  return (
    <div>
      <h1 className="forecast-title">Forecast</h1>
      <div className="forecastWrapper">
        <div className="forecast-days">
          {forecast
            ? forecast.map((item, index) => {
                return (
                  <div className="forecast-day" key={index}>
                    <div className="day">
                      {moment(item.dt_txt).format("ddd")}
                    </div>
                    <div className="icon">
                      <WeatherIcon code={item.weather[0].id} timezone={item.weather[0].timezone} />
                    </div>
                    <div className="temps">
                      <span>{Math.floor(item.main.temp)}°C </span>
                    </div>
                    <div className="description">
                      {item.weather[0].description}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
