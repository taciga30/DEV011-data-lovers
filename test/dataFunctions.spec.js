import { movieTotal } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('movieTotal', () => {
  
  it('deberia retornar 3 para "'+ fakeData +'"', () => {

    expect(movieTotal(fakeData)).toBe(3);
  });
});

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
