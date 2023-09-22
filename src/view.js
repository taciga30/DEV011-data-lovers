const moviesList = document.getElementById("root");



export const renderItems = (data) => {
  data.forEach(
    (film) => {
     
      const ul = document.createElement("ul");
      //ul.textContent = film;
      moviesList.appendChild(ul); 
      
      const article = document.createElement("article");
      article.setAttribute('class', 'pelicula');
      //article.textContent = film;
      ul.appendChild(article);
      
      
      const img = document.createElement("img");
      img.setAttribute('itemprop', 'image')
      img.src = film.poster;
      //img.setAttribute('alt', 'Cartel')
      //img.textContent = film;
      article.appendChild(img);
      
      
      const li = document.createElement("li");
      li.setAttribute('class', 'titulo_pelicula')
      li.setAttribute('itemscope', '')
      li.setAttribute('itemtype', 'pelicula')
      li.setAttribute('itemprop', 'title')
      li.textContent = film.title;
      article.appendChild(li);  
      //   `
      //         <article class="pelicula">
      //           <img
      //             itemprop="image"
      //             src="${film.poster}"
      //             alt="Cartel"
      //           />
      //           <li
      //             class="titulo_pelicula"
      //             itemscope
      //             itemtype="pelicula"
      //             itemprop="title"
      //           >${film.title}</li>
      //         </article>
      // `
    });
  // //console.log(ul);
  // return ul;
};
