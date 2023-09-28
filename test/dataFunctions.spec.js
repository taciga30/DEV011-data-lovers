import { movieTotal, filterMovieBy } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//Html ficticio para que pueda correr la prueba de contar peliculas
document.body.innerHTML = `
  <section class="contador">
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

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

// function sumar(a, b) {
//   return a + b;
// }

// // Describe el conjunto de pruebas
// describe('Función sumar', () => {
//   // Prueba 1: Verifica que la suma de 1 y 2 sea igual a 3
//   it('Debería sumar 1 + 2 y obtener 3', () => {
//     const resultado = sumar(1, 2);
//     expect(resultado).toBe(3); // Utiliza expect para realizar la afirmación
//   });

//   // Prueba 2: Verifica que la suma de 5 y -3 sea igual a 2
//   it('Debería sumar 5 + (-3) y obtener 2', () => {
//     const resultado = sumar(5, -3);
//     expect(resultado).toBe(2);
//   });

// Puedes escribir más pruebas aquí
// });
