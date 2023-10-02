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
window.addEventListener("load", () => {
  forDirector(data.films)
  forProducer(data.films)
});

//Muestra en el DOM la función de filtrar por director y el contador
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
  movieTotal(resultadoFiltro);
});

//Muestra en el DOM la función de filtrar por productor y el contador
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
  movieTotal(resultadoFiltro2)
});

//Ejecuta y muestra en el DOM la función limpiar para volver a estado inicial los filtros
const boton = document.querySelector("button[data-testid='button-clear']")
console.log(boton);
function limpiar(){
  location.reload();
}
boton.addEventListener("click", limpiar);

  

