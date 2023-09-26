import { movieTotal } from "./dataFunctions.js";
import { renderItems,forDirector,forProducer } from "./view.js";
import data from "./data/ghibli/ghibli.js";

const moviesList = document.getElementById("root");
window.addEventListener("load", () => {
  moviesList.appendChild(renderItems(data.films));
});
//console.log(renderItems);

window.addEventListener("load", () => movieTotal(data.films));
//console.log(movieTotal);


window.addEventListener("load", () => forDirector(data.films));
window.addEventListener("load", () => forProducer(data.films));