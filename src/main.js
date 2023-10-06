import { movieTotal, filterMovieBy, computeStats, sortData } from "./dataFunctions.js";
import { renderItems, forDirector, forProducer, forAño } from "./view.js";
import data from "./data/ghibli/ghibli.js";

//Muestra en el DOM la renderización de las películas
const moviesList = document.querySelector("#root");
window.addEventListener("load", () => {
  moviesList.appendChild(renderItems(data.films));
});

//Muestra en el DOM
window.addEventListener("load", () => {
  forDirector(data.films); //las opciones del select de director
  forProducer(data.films); //las opciones del select de productor
  forAño(data.films); //las opciones del select de año de estreno
  movieTotal(data.films); //la función de contar el total de las películas
  computeStats(data.films); //la función del promedio de personajes por película
});

//Muestra en el DOM la función de filtrar por director y el contador
const dataFilter = data.films;
const filtrado = document.querySelector('[name="director"]');
const filtrado2 = document.querySelector('[name="productor"]');
const filtrado3 = document.querySelector('[name="año"]'); 
const ordenarPor = document.querySelector('[name="title"]');
let newArray = dataFilter;

filtrado.addEventListener("change", (e) => {
  const filtradoValue = e.target.value;
  const resultadoFiltro = filterMovieBy(
    dataFilter,
    "director",
    filtradoValue
  );
  moviesList.innerHTML = "";
  moviesList.appendChild(renderItems(resultadoFiltro));
  newArray = resultadoFiltro
  movieTotal(resultadoFiltro);
});

//Muestra en el DOM la función de filtrar por productor y el contador
filtrado2.addEventListener("change", () => {
  const resultadoFiltro2 = filterMovieBy(
    dataFilter,
    "producer",
    filtrado2.value
  );
  moviesList.innerHTML = "";
  moviesList.appendChild(renderItems(resultadoFiltro2));
  newArray= resultadoFiltro2
  movieTotal(resultadoFiltro2);
});

//Muestra en el DOM la función de filtrar por año y el contador
filtrado3.addEventListener("change", () => {
  const resultadoFiltro3 = filterMovieBy(
    dataFilter,
    "release_date",
    filtrado3.value
  );
  moviesList.innerHTML = "";
  moviesList.appendChild(renderItems(resultadoFiltro3));
  newArray = resultadoFiltro3
  movieTotal(resultadoFiltro3);
});

//Muestra en el DOM la función de Ordenar
ordenarPor.addEventListener("change", () => {
  const nuevoArray = [...newArray]
  

  const resultadoOrder = sortData(nuevoArray, "title", ordenarPor.value,);
 
  moviesList.innerHTML = "";
  moviesList.appendChild(renderItems(resultadoOrder));
  movieTotal(resultadoOrder);
});


//Ejecuta y muestra en el DOM la función limpiar para volver a estado inicial los filtros
const boton = document.querySelector("button[data-testid='button-clear']");
function limpiar() {
  newArray = data.films;
  document.querySelector("select[name='director']").value = "director";
  document.querySelector("select[name='productor']").value = "productor";
  document.querySelector("select[name='año']").value = "año";
  document.querySelector("select[name='title']").value = "";
  moviesList.innerHTML = "";
  moviesList.appendChild(renderItems(newArray));
  movieTotal(newArray);
}
boton.addEventListener("click", limpiar);
