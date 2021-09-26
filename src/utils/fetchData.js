import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCityWeather = (city) => {
	axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
	)
		.then((res) => res.json())
		.then((res) => {
			let weatherData = {
				location: res.name,
				temp_max: res.main.temp_max,
				temp_min: res.main.temp_min,
				description: res.weather[0].description,
				country: res.sys.country,
				wind_speed: res.wind.speed,
				iconId: res.weather[0].id,
				sunrise: res.weather.sys.sunrise,
				sunset: res.weather.sys.sunset,
			};
			return weatherData;
		});
};

export const getCityForecast = (city) => {
	axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
	)
		.then((res) => res.json())
		.then((res) => {
			const forecast = [];
			for (let i = 0; i < res.list.length; i += 8) {
				forecast.push(res.list[i + 5]);
			}
			return forecast;
		});
};
