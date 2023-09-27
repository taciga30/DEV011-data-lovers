
export const movieTotal = (data) => {
  const contador = document.querySelector(".contador span");
  const totalFilms = data.length;
  //console.log(totalFilms);
  contador.innerText = parseInt(totalFilms);
  //return parseInt(totalFilms);
};
//para filtrar


// export function filterDirector (data){
//   const selectDirector = data.filter(director) => director.map
    
//   });

// };
  
  
  


// export const showDirector = (data) => {
//   const seeDirector = data.filter(movie => movie.director =   ).map(movie => movie.title);
//     return seeDirector;
// };
  