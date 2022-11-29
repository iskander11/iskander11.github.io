import {
  createElementWithClassname,
  toCelsius,
  getImageURL,
  getTimeFrom,
} from "../CONTROLLER/helpers.js";
import { addCity, locationHandle } from "../CONTROLLER/handlers.js";
import { TIMEMETHOD } from "../MODEL/timemethods.js";
import { giveTabs } from "./tabs.js";
import { locations } from "../MODEL/locations.js";
export const render = async (array) => {
  const [cityWeather, forecast] = await array;
  const leftSide = document.querySelector(".main_info-section_left-side_card");
  const nowTab = document.getElementById("now");
  const detailsTab = document.getElementById("details");
  const forecastTab = document.getElementById("forecast");
  leftSide.replaceChildren();
  leftSide.append(nowCard(cityWeather));
  leftSide.append(detailsCard(cityWeather));
  leftSide.append(forecastCard(cityWeather, forecast));
  giveTabs();
};

const nowCard = ({ name, icon, temp }) => {
  const firstCard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first"
  );

  const firstCardDigit = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_digit"
  );
  firstCardDigit.textContent = toCelsius(temp) + "°";
  const firstCardIcon = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_icon"
  );
  firstCardIcon.style.background = `url(${getImageURL(icon)})`;
  const firstCardTitle = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_title"
  );
  const firstTitleCityName = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_title-city"
  );
  firstTitleCityName.textContent = name;
  firstTitleCityName.setAttribute("data-name", name);
  const likeButton = document.createElement("button");
  likeButton.className = locations.includes(name)
    ? "like"
    : "main_info-section_left-side_card-first_title-like";
  likeButton.setAttribute("type", "button");
  likeButton.setAttribute("id", "likeButton");
  likeButton.addEventListener("click", addCity);

  firstCardTitle.append(firstTitleCityName);
  firstCardTitle.append(likeButton);

  firstCard.append(firstCardDigit);
  firstCard.append(firstCardIcon);
  firstCard.append(firstCardTitle);
  return firstCard;
};

const detailsCard = ({
  name,
  temp,
  feelsLike,
  weatherMain,
  sunrise,
  sunset,
}) => {
  const secondCard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-second"
  );
  const secondCardTitle = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-second-title"
  );
  secondCardTitle.textContent = name;
  const secondCardDetails = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-second-details"
  );
  const secondCardTemp = document.createElement("p");
  secondCardTemp.textContent = `Temperature:` + toCelsius(temp) + "°";
  const secondCardFeelsLike = document.createElement("p");
  secondCardFeelsLike.textContent = `Feels like:` + toCelsius(feelsLike) + "°";
  const secondCardWeather = document.createElement("p");
  secondCardWeather.textContent = `Weather:` + weatherMain;
  const secondCardSunrise = document.createElement("p");
  secondCardSunrise.textContent =
    `Sunrise:` + getTimeFrom(TIMEMETHOD.TIMESTAMP_TO_HOURS_MINUTES, sunrise);
  const secondCardSunset = document.createElement("p");
  secondCardSunset.textContent =
    `Sunset:` + getTimeFrom(TIMEMETHOD.TIMESTAMP_TO_HOURS_MINUTES, sunset);
  secondCardDetails.append(secondCardTemp);
  secondCardDetails.append(secondCardFeelsLike);
  secondCardDetails.append(secondCardWeather);
  secondCardDetails.append(secondCardSunrise);
  secondCardDetails.append(secondCardSunset);
  secondCard.append(secondCardTitle);
  secondCard.append(secondCardDetails);
  return secondCard;
};

const forecastCard = ({ name }, forecastList) => {
  const thirdCard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third"
  );
  const thirdCardTitle = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-title"
  );
  thirdCardTitle.textContent = name;
  thirdCard.append(thirdCardTitle);
  for (let prognosis of forecastList) {
    thirdCard.append(forecastMinicard(prognosis));
  }
  return thirdCard;
};

const forecastMinicard = ({ date, temp, feels_like, weather, icon }) => {
  const thirdCardMinicard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard"
  );

  const thirdCardMinicardHead = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head"
  );
  const thirdCardMinicardHeadDate = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head-date"
  );
  thirdCardMinicardHeadDate.textContent = getTimeFrom(
    TIMEMETHOD.DT_TO_DAY_MONTH,
    date
  );
  const thirdCardMinicardHeadTime = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head-time"
  );
  thirdCardMinicardHeadTime.textContent = getTimeFrom(
    TIMEMETHOD.DT_TO_HOURS_MINUTES,
    date
  );
  thirdCardMinicardHead.append(thirdCardMinicardHeadDate);
  thirdCardMinicardHead.append(thirdCardMinicardHeadTime);
  const thirdCardMinicardFooter = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__footer"
  );

  const thirdCardMinicardFooterDetails = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__footer-details"
  );
  const thirdCardMinicardDetailsTemp = document.createElement("p");
  thirdCardMinicardDetailsTemp.textContent = `Temperature:${toCelsius(temp)}°`;
  const thirdCardMinicardDetailsFeelsLike = document.createElement("p");
  thirdCardMinicardDetailsFeelsLike.textContent = `Feels like:${toCelsius(
    feels_like
  )}°`;
  const thirdCardMinicardFooterWeather = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__footer-weather"
  );
  const thirdCardMinicardFooterWeatherDescribe = document.createElement("p");
  thirdCardMinicardFooterWeatherDescribe.textContent = weather;
  const thirdCardMinicardFoooterImage = document.createElement("img");
  thirdCardMinicardFoooterImage.setAttribute("src", getImageURL(icon));
  thirdCardMinicardFooterDetails.append(thirdCardMinicardDetailsTemp);
  thirdCardMinicardFooterDetails.append(thirdCardMinicardDetailsFeelsLike);
  thirdCardMinicardFooterWeather.append(thirdCardMinicardFooterWeatherDescribe);
  thirdCardMinicardFooterWeather.append(thirdCardMinicardFoooterImage);
  thirdCardMinicardFooter.append(thirdCardMinicardFooterDetails);
  thirdCardMinicardFooter.append(thirdCardMinicardFooterWeather);
  thirdCardMinicard.append(thirdCardMinicardHead);
  thirdCardMinicard.append(thirdCardMinicardFooter);
  return thirdCardMinicard;
};

export const cityRender = (array) => {
  const cityLocations = document.querySelector(
    ".main_info-section_locations-cities"
  );
  cityLocations.replaceChildren();
  for (let city of array) {
    const location = document.createElement("p");
    location.textContent = city;
    location.setAttribute("data-cityname", city);
    location.addEventListener("click", locationHandle);
    cityLocations.append(location);
  }
};
