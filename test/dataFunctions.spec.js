import { movieTotal } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//console.log(fakeData);
document.body.innerHTML = `
  <section class="contador">
    <span> 0 </span>
  </section>
  `;

describe("movieTotal", () => {
  it('deberia retornar 3 para "' + fakeData + '"', () => {
    const contador = document.querySelector(".contador span");
    movieTotal(fakeData);
    expect(contador.innerText).toBe(3);
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
