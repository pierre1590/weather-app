import React from "react";
import moment from "moment";

import Cloudy from "../../assets/icons/animated/cloudy.svg";
import Cloudy2 from "../../assets/icons/animated/cloudy-day-2.svg";
import Cloudy3 from "../../assets/icons/animated/cloudy-day-3.svg";
import Rain3 from "../../assets/icons/animated/rainy-3.svg";
import Rain1 from "../../assets/icons/animated/rainy-1.svg";
import Rain2 from "../../assets/icons/animated/rainy-2.svg";
import Rain5 from "../../assets/icons/animated/rainy-5.svg";
import Rain6 from "../../assets/icons/animated/rainy-6.svg"; //alot of rain
import Rain7 from "../../assets/icons/animated/rainy-7.svg"; //heavy rain
import Sun from "../../assets/icons/animated/day.svg";
import Moon from "../../assets/icons/animated/night.svg";
import Snowy from "../../assets/icons/animated/snowy-6.svg";
import ThunderStorm from "../../assets/icons/animated/thunder.svg";
import Fog from "../../assets/icons/animated/fog.png";
import Haze from "../../assets/icons/animated/haze.png";
import Mist from "../../assets/icons/animated/mist.png";
import Dust from "../../assets/icons/animated/dust.png";
import Smoke from "../../assets/icons/animated/smoke.png";

function isDay(timezone) {
  const hours = Number(moment().tz(timezone).format("HH"));
  return hours >= 6 && hours <= 18;
}

const WeatherIcon = ({ code, timezone }) => {
  const iconFor800 = isDay(timezone) ? Sun : Moon;

  const icon = {
    800: iconFor800,
    801: Cloudy,
    802: Cloudy2,
    // ...
  }[code];

  return <img className="Icon" src={Cloudy} alt="Weather icon" />;
};

export default WeatherIcon;
