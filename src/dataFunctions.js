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

function contarPersonajes(films) {
  let totalPeople = 0;
  for (let i = 0; i < films.length; i++) {
    const personajes = films[i].people;
    totalPeople += personajes.length;
  }
  return totalPeople;
}

export const computeStats = (films) => {
  const promedio = document.querySelector(".promedio span");
  const totalPersonajes = contarPersonajes(films);
  const totalPeliculas = films.length;
  const resultPromedio = totalPersonajes / totalPeliculas;
  promedio.innerText = parseInt(resultPromedio);
};
