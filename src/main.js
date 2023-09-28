import { movieTotal, filterMovieBy } from "./dataFunctions.js";
import { renderItems, forDirector, forProducer } from "./view.js";
import data from "./data/ghibli/ghibli.js";

//Muestra en el DOM la renderización de las películas
const moviesList = document.querySelector("#root");
window.addEventListener("load", () => {
  moviesList.appendChild(renderItems(data.films));
});
//Muestra en el DOm la función de contar el total de las películas
window.addEventListener("load", () => movieTotal(data.films));
//Muestra en el DOM los select
window.addEventListener("load", () => forDirector(data.films));
window.addEventListener("load", () => forProducer(data.films));

//Muestra la función de filtrar por director
const dataDirector = data.films;
const filtrado = document.querySelector('[name="director"]');
filtrado.addEventListener("change", () => {
  const resultadoFiltro = filterMovieBy(
    dataDirector,
    "director",
    filtrado.value
  );
  moviesList.innerHTML = "";
  moviesList.appendChild(renderItems(resultadoFiltro));
});

//Muestra la función de filtrar por productor
const dataProductor = data.films;
const filtrado2 = document.querySelector('[name="productor"]');
filtrado2.addEventListener("change", () => {
  const resultadoFiltro2 = filterMovieBy(
    dataProductor,
    "producer",
    filtrado2.value
  );
  moviesList.innerHTML = "";
  moviesList.appendChild(renderItems(resultadoFiltro2));
});
