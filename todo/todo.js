import { render } from "./render.js";
import { formsUpdate } from "./formHandler.js";
import { list } from "./list.js";

render();
formsUpdate();

const arrObj = [...list.sort((a, b) => (a.status > b.status ? 1 : -1))];
console.log(arrObj);
