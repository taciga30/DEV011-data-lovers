//Crear los elementos del HTML con sus respectivos atributos
export const renderItems = (data) => {
  const ul = document.createElement("ul");
  data.forEach((film) => {
    const img = document.createElement("img");
    img.setAttribute("itemprop", "image");
    img.src = film.poster;

    const li1 = document.createElement("li");
    const p = document.createElement("p");

    li1.setAttribute("class", "pelicula");
    li1.setAttribute("itemscope", "");
    li1.setAttribute("itemtype", "pelicula");
    li1.setAttribute("itemprop", "title");
    p.textContent = film.title;
    li1.appendChild(img);
    li1.appendChild(p);
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    const h3 = document.createElement("h3");
    const nameDirector = document.createElement("p");
    const nameProducer = document.createElement("p");
    li2.setAttribute("class", "back");
    li2.setAttribute("itemscope", "");
    li2.setAttribute("itemtype", "pelicula");
    li2.setAttribute("itemprop", "title");
    h3.textContent = film.title;
    nameDirector.textContent = "Director: " + film.director;
    nameProducer.textContent = "Productor: " + film.producer;
    li2.appendChild(h3);
    li2.appendChild(nameDirector);
    li2.appendChild(nameProducer);
    ul.appendChild(li2);
  });
  return ul;
};

//Traer los directores al select del filtro
export const forDirector = (data) => {
  const selectDirector = document.querySelector('[name="director"]');
  //console.log(selectDirector);
  const directorsArray = [];
  const optionEscoje = document.createElement("option");

      optionEscoje.setAttribute("value", '');
      optionEscoje.textContent = 'Escoje...';
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
    optionEscoje.setAttribute("value", '');
    optionEscoje.textContent = 'Escoje...';
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
