//Crear los elementos del HTML con sus respectivos atributos
export const renderItems = (data) => {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "padre");

  data.forEach((film) => {
    const ul2 = document.createElement("ul");
    const ul3 = document.createElement("ul");
    const li = document.createElement("li");
    const liBack = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const pDirector = document.createElement("p");
    const pProducer = document.createElement("p");
    // const pFecha = document.createElement("p");
    const h3 = document.createElement("h3");

    li.setAttribute("class", "pelicula");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "pelicula");
    li.setAttribute("itemprop", "title");

    img.setAttribute("itemprop", "image");
    img.src = film.poster;

    p.textContent = film.title;

    li.appendChild(img);
    li.appendChild(p);
    ul3.appendChild(li);

    ul2.setAttribute("class", "tarjetaFlip");
    // Tarjeta de atrás
    ul3.setAttribute("class", "tarjetaInner");

    liBack.setAttribute("class", "back");
    liBack.setAttribute("itemscope", "");
    liBack.setAttribute("itemtype", "pelicula");
    liBack.setAttribute("itemprop", "info");

    h3.textContent = film.title;

    pDirector.textContent = "Director: " + film.director;
    pProducer.textContent = "Productor: " + film.producer;
    // pFecha.textContent = "Lanzamiento: " + film.release_date;

    liBack.appendChild(h3);
    liBack.appendChild(pDirector);
    liBack.appendChild(pProducer);
    // liBack.appendChild(pFecha);
    ul3.appendChild(liBack);

    ul2.appendChild(ul3);

    ul.appendChild(ul2);
  });
  return ul;
};


//Traer los directores al select del filtro
export const forDirector = (data) => {
  const selectDirector = document.querySelector('[name="director"]');
  const directorsArray = [];
  const optionEscoje = document.createElement("option");

  optionEscoje.setAttribute("value", "");
  optionEscoje.textContent = "Seleccionar director";
  selectDirector.appendChild(optionEscoje);

  data.forEach((film) => {
    if (!directorsArray.includes(film.director)) {
      directorsArray.push(film.director);

      const optionDirector = document.createElement("option");

      optionDirector.setAttribute("value", film.director);
      optionDirector.textContent = film.director;

      selectDirector.appendChild(optionDirector);
    }
  });

  return directorsArray;
};

//Traer los productores al select del filtro
export const forProducer = (data) => {
  const selectProducer = document.querySelector('[name="productor"]');
  const producerArray = [];
  const optionEscoje = document.createElement("option");

  optionEscoje.setAttribute("value", "");
  optionEscoje.textContent = "Seleccionar productor";
  selectProducer.appendChild(optionEscoje);

  data.forEach((film) => {
    if (!producerArray.includes(film.producer)) {
      producerArray.push(film.producer);

      const optionProducer = document.createElement("option");

      optionProducer.setAttribute("value", film.producer);
      optionProducer.textContent = film.producer;

      selectProducer.appendChild(optionProducer);
    }
  });

  return selectProducer;
};
