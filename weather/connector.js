import { search } from "./CONTROLLER/handlers.js";
import { render, cityRender } from "./VIEW/render.js";
import { getCityInfo } from "./MODEL/getcity.js";
render(getCityInfo("Aktobe"));
cityRender(JSON.parse(localStorage.getItem("cities")));
const searchForm = document.querySelector(".main__city-search");
searchForm.addEventListener("submit", search);
