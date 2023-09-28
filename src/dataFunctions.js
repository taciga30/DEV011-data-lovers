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

