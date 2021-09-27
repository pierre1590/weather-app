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
										<div className="icon">{getIcon(item.data.weather[0].id)}</div>
										<div>/</div>
										<div className="description">
											{item.data.weather[0].description}
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

