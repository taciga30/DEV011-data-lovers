//const moviesList = document.getElementById("root");
const ul = document.createElement("ul");
//const li = document.createElement("li");

export const renderItems = (data) => {
  data.forEach(
    (film) =>
      (ul.innerHTML += `
              <article class="pelicula">
                <img
                  itemprop="image"
                  src="${film.poster}"
                  alt="Cartel"
                />
                <li
                  class="titulo_pelicula"
                  itemscope
                  itemtype="pelicula"
                  itemprop="title"
                >${film.title}</li>
              </article>
      `)
  );
  //console.log(ul);
  return ul;
};
