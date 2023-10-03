//Crear los elementos del HTML con sus respectivos atributos
export const renderItems = (data) => {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "padre");

  data.forEach((film) => {
    const li = document.createElement("li");
    const liBack = document.createElement("li");
    const dl = document.createElement("dl");
    const dlBack = document.createElement("dl");
    const img = document.createElement("img");
    const dtTitulo = document.createElement("dt");
    const dtDirector = document.createElement("dt");
    const dtProducer = document.createElement("dt");
    const nameDirector = document.createElement("dl");
    const nameProducer = document.createElement("dl");
    const dtFecha = document.createElement("dt");
    const numFecha = document.createElement("dl");
    const h3 = document.createElement("h3");

    li.setAttribute("class", "tarjetaFlip");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "pelicula");
    li.setAttribute("itemprop", "title");

    dl.setAttribute("class", "pelicula");

    img.setAttribute("itemprop", "image");
    img.src = film.poster;

    dtTitulo.textContent = film.title;

    dl.appendChild(img);
    dl.appendChild(dtTitulo);
    liBack.appendChild(dl);

    // Tarjeta de atrás
    liBack.setAttribute("class", "tarjetaInner");
    liBack.setAttribute("itemscope", "");
    liBack.setAttribute("itemtype", "pelicula");
    liBack.setAttribute("itemprop", "info");

    dlBack.setAttribute("class", "back");

    h3.textContent = film.title;

    dtDirector.textContent = "Director:";
    nameDirector.textContent = film.director;
    dtProducer.textContent = "Productor:";
    nameProducer.textContent = film.producer;
    dtFecha.textContent = "Lanzamiento:";
    numFecha.textContent = film.release_date;

    dlBack.appendChild(h3);
    dlBack.appendChild(dtDirector);
    dlBack.appendChild(dtProducer);
    dtDirector.appendChild(nameDirector);
    dtProducer.appendChild(nameProducer);
    dlBack.appendChild(dtFecha);
    dtFecha.appendChild(numFecha);
    liBack.appendChild(dlBack);

    li.appendChild(liBack);

    ul.appendChild(li);
  });
  return ul;
};

//Traer los directores al select del filtro
export const forDirector = (data) => {
  const selectDirector = document.querySelector('[name="director"]');
  const directorsArray = [];
  const optionEscoje = document.createElement("option");

  optionEscoje.setAttribute("value", "director");
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

  optionEscoje.setAttribute("value", "productor");
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

//Traer los años al select del filtro
export const forAño = (data) => {
  const selectAño = document.querySelector('[name="año"]');
  const añoArray = [];
  const optionEscoje = document.createElement("option");

  optionEscoje.setAttribute("value", "año");
  optionEscoje.textContent = "Seleccionar año";
  selectAño.appendChild(optionEscoje);

  data.forEach((film) => {
    if (!añoArray.includes(film.release_date)) {
      añoArray.push(film.release_date);

      const optionAño = document.createElement("option");

      optionAño.setAttribute("value", film.release_date);
      optionAño.textContent = film.release_date;

      selectAño.appendChild(optionAño);
    }
  });

  return selectAño;
};
