
export const movieTotal = (data) => {
  const contador = document.querySelector(".contador span");
  const totalFilms = data.length;
  //console.log(totalFilms);
  contador.innerText = parseInt(totalFilms);
  //return parseInt(totalFilms);
};
