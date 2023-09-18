import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/ghibli/ghibli.js";

/// Obtén una referencia al elemento <dl> en tu HTML donde deseas mostrar las películas.
const moviesList = document.getElementById("root");

console.log(example, renderItems, data);
// Función para mostrar las películas en el DOM.
function renderMovies() {
  // Utiliza el método map() para crear un array de HTML para cada película.
  const movieHTMLArray = data.films.map(
    (film) => `
    <ul>
          <article class="pelicula">
            <img
              itemprop="image"
              src="${film.poster}"
              alt="Cartel"
            />
            <li
              class="titulo_pelicula"
              itemscope
              itemtype="pelicula"
              itemprop="title"
            >${film.title}</li>
          </article>
        </ul>
  `
  );

  // Convierte el array de HTML en una cadena y agrégalo al elemento <dl> en el DOM.
  moviesList.innerHTML = movieHTMLArray.join("");
}
// Llama a la función para mostrar las películas cuando la página se carga.
window.addEventListener("load", renderMovies);

//console.log(example, renderItems, data);
