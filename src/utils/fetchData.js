import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCityWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const res = await axios.get(url);
  let setData = {
    location: res.data.name,
    temp: res.data.main.temp,
    temp_max: res.data.main.temp_max,
    temp_min: res.data.main.temp_min,
    description: res.data.weather[0].description,
    country: res.data.sys.country,
    wind_speed: Math.floor(res.data.wind.speed * 3.6),
    wind_deg: res.data.wind.deg,
    humidity: res.data.main.humidity,
    pressure: res.data.main.pressure,
    visibility: (res.data.visibility / 1000).toFixed(1),
    iconId: res.data.weather[0].id,
    sunrise: res.data.sys.sunrise,
    sunset: res.data.sys.sunset,
    timezone: res.data.timezone / 3600,
    idCity: res.data.sys.id
  };
  return setData;
};



export const getCityForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  const res = await axios.get(url);
  const forecast = [];
  for (let i = 0; i < res.data.list.length; i += 8) {
    forecast.push(res.data.list[i + 5]);
  }
  return forecast;
};



