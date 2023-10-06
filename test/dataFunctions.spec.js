import {
  movieTotal,
  filterMovieBy,
  computeStats,
  sortData
} from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
import { dataOrdenada, dataOrdenada2 } from "./data.js";

//Html ficticio para que pueda correr la prueba de contar peliculas
document.body.innerHTML = `
  <section class="contador">
    <span> 0 </span>
  </section>
  <section class="promedio">
    <p>Promedio personajes por película:</p>
    <span> 0 </span>
  </section>
  `;

//Test para evaluar la función de contar la cantidad de películas
describe("movieTotal", () => {
  it("deberia retornar 3 para el total de películas", () => {
    const contador = document.querySelector(".contador span");
    movieTotal(fakeData);
    expect(contador.innerText).toBe(3);
  });
});

//Test para evaluar la función para filtrar
describe("Función filtrar", () => {
  // Deberia traer el tituulo de la peli si tienen el mismo director
  it("Trae el titulo My Neighbor Totoro y Kikis Delivery Service", () => {
    const result = filterMovieBy(fakeData, "director", "Hayao Miyazaki");
    result.forEach((movie) => {
      expect(movie.director).toBe("Hayao Miyazaki");
    });
    expect(result.length).toBe(2);
  });
});

describe("Función promedio", () => {
  it("debería retornar 9 como promedio de personajes de las 3 películas", () => {
    const promedio = document.querySelector(".promedio span");
    computeStats(fakeData);
    expect(promedio.innerText).toBe(9);
  });
});

describe("Función ordenar", () => {
  it("ordena de forma ascendente por titulo", () => {
    const result = sortData(fakeData, "title", "asc");
    expect(result).toEqual(dataOrdenada);
  });
});

describe("Función ordenar", () => {
  it("ordena de forma descendebte por titulo", () => {
    const result = sortData(fakeData, "title", "desc");
    expect(result).toEqual(dataOrdenada2);
  });
});
