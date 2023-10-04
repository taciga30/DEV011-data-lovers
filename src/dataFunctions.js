//Función para contar la cantidad de peliculas que se muestran
export const movieTotal = (moviesList) => {
  const contador = document.querySelector(".contador span");
  const totalFilms = moviesList.length;

  contador.innerText = parseInt(totalFilms);
};

//Función para filtrar por director y por productor (en el main se especifica cada filtro)
export const filterMovieBy = (data, filterBy, value) => {
  return data.filter((element) => {
    return element[filterBy] === value;
  });
};


  
  // console.log(totalPeople);
  // for (let i = 0; i < films.length; i++) {
  //   const personajes = films[i].people;
  //   totalPeople += personajes.length;
  // }
  // return totalPeople;


export const computeStats = (films) => {
  const promedio = document.querySelector(".promedio span");
  const nuevoArray = films.map (i=>i.people.length);
  console.log(nuevoArray);
  const totalPeople= nuevoArray.reduce ((acumulador,personajes)=>{
     return acumulador+personajes;
  });
  console.log(totalPeople);

  
  const totalPeliculas = films.length;
  const resultPromedio = totalPeople / totalPeliculas;
  promedio.innerText = parseInt(resultPromedio);
};
