export const forecastInterface = (object) => {
  let forecast = [];
  for (let hour of object.list) {
    const needInfoInForecast = {
      date: hour.dt_txt,
      temp: hour.main.temp,
      feels_like: hour.main.feels_like,
      weather: hour.weather[0].main,
      icon: hour.weather[0].icon,
    };
    forecast = [...forecast, needInfoInForecast];
  }
  return forecast;
};
