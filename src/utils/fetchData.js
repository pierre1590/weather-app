import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

 export const getCityWeather = (city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
	return axios.get(url)
	.then((res)=> {
			let setData = {
				location: res.data.name,
				temp: res.data.main.temp,
				temp_max: res.data.main.temp_max,
				temp_min: res.data.main.temp_min,
				description: res.data.weather[0].description,
				country: res.data.sys.country,
				wind_speed: res.data.wind.speed,
				wind_deg:res.data.wind.deg,
				humidity: res.data.main.humidity,
				pressure: res.data.main.pressure,
				visibility: (res.data.visibility/1000).toFixed(1),
				iconId: res.data.weather[0].id,
				sunrise:res.data.sys.sunrise,
				sunset:res.data.sys.sunset,
				timezone:res.data.timezone/3600
			};
			return setData;
	});
 }

export const getCityForecast = (city) => {
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
	return axios.get(url)
	.then((res) => {
		const forecast = [];
		for (let i=0; i<res.data.length; i+=8) {
			forecast.push(res.data.list[i+5]);
		}
			return forecast;
		});
}

export const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};
