import {movieTotal} from "./dataFunctions.js";
//import { renderItems } from "./view.js";

import data from "./data/ghibli/ghibli.js";

// en tu HTML donde deseas mostrar las películas.
const moviesList = document.getElementById("root");


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

  // Convierte el array de HTML en una cadena y agrega al elemento <ul> en el DOM.
  moviesList.innerHTML = movieHTMLArray.join("");
  //console.log(movieHTMLArray.join(""));
}

// Llama a la función para mostrar las películas cuando la página se carga.
window.addEventListener("load", renderMovies);


//ubicarlo en el html
const contador = document.querySelector(".contador span")
//contar la cantida de peliculas en el array
function movieShow() { 
  const totalImprime = movieTotal(data.films)
  contador.innerText = totalImprime;
  //console.log(totalImprime);
}
// cuando se carga la pagina,
window.addEventListener("load",movieShow)




//console.log(example, renderItems, data);*/
