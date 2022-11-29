import { errorHandle } from "../CONTROLLER/error.js";
import { weatherInterface } from "./weather.js";
import { forecastInterface } from "./forecast.js";
export const getCityInfo = async (city) => {
  const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "102c345b77ee0ea5c3ea50c6e797f5aa";
  const url = `${serverUrl}?q=${city}&appid=${apiKey}`;

  const response = await fetch(url).catch((error) => errorHandle(error));
  const weatherInfo = await response
    .json()
    .catch((error) => errorHandle(error));
  const forecastInfo = await getForecast(city).catch((error) =>
    errorHandle(error)
  );
  return [weatherInterface(weatherInfo), forecastInterface(forecastInfo)];
};

const getForecast = async (cityName) => {
  const serverUrl = "https://api.openweathermap.org/data/2.5/forecast";
  const apiKey = "102c345b77ee0ea5c3ea50c6e797f5aa";
  const url = `${serverUrl}/?q=${cityName}&appid=${apiKey}`;

  const response = await fetch(url).catch((error) => errorHandle(e));
  const forecastInfo = await response.json().catch((error) => errorHandle(e));
  return forecastInfo;
};
