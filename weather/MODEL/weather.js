export const weatherInterface = (Object) => {
  const needInfo = {
    id: Object.id,
    name: Object.name,
    temp: Object.main.temp,
    feelsLike: Object.main.feels_like,
    weatherMain: Object.weather[0].main,
    WeatherDescription: Object.weather[0].description,
    sunrise: Object.sys.sunrise,
    sunset: Object.sys.sunset,
    icon: Object.weather[0].icon,
  };
  return needInfo;
};
