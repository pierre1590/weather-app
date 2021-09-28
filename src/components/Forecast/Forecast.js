import React from "react";
import "./Forecast.css";
import moment from "moment";
import getIcon from "../../utils/setIcon";

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
										<div className="icon">{getIcon(item.weather[0].id)}</div>
										<div className="temps">
											<span className="info_max">{Math.floor(item.main.temp_max)}°C </span> / 
											<span className="info_min"> {Math.floor(item.main.temp_min)}°C </span>
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

