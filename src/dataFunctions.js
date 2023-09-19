const contador = document.querySelector(".contador span");
export const movieTotal = (data) => {
  const totalFilms = data.length;
  contador.innerText = parseInt(totalFilms);
  return parseInt(totalFilms);
};
