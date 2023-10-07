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

export const computeStats = (films) => {
  const promedio = document.querySelector(".promedio span");
  const nuevoArray = films.map((i) => i.people.length);
  const totalPeople = nuevoArray.reduce((acumulador, personajes) => {
    return acumulador + personajes;
  });
  
  const totalPeliculas = films.length;
  const resultPromedio = totalPeople / totalPeliculas;
  promedio.innerText = parseInt(resultPromedio);
};

//Función para ordenar 
export const sortData = (data, sortBy, sortOrder) => {
  const dataOrden =data.sort((a,b)=> {
    if (sortOrder === "asc"){
      if (a[sortBy]< b[sortBy]){
        return -1;
      }
      else if (a[sortBy]> b[sortBy]){
        return 1;
      } 
    }
    else if (sortOrder === "desc"){
      if (a[sortBy]< b[sortBy]){
        return 1;
      }
      else if (a[sortBy]> b[sortBy]){
        return -1;
      } 
    }  
  })  
  return  dataOrden;
};