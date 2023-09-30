//Crear los elementos del HTML con sus respectivos atributos
export const renderItems = (data) => {
  const ul = document.createElement("ul");
  ul.setAttribute("class","padre")
  data.forEach((film) => {
    const img = document.createElement("img");
    img.setAttribute("itemprop", "image");
    img.src = film.poster;
    const ul2 = document.createElement("ul");
    const ul3 = document.createElement("ul");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const pdirector=document.createAttribute("p")

    const liBack= document.createElement("li")

    ul2.setAttribute("class","tarjetaFlip");
    ul3.setAttribute("class","tarjetaInner");


    li.setAttribute("class", "pelicula");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "pelicula");
    li.setAttribute("itemprop", "title");
    p.textContent = film.title;
    liBack.setAttribute("class","back");
    pdirector.textContent = film.director;
    li.appendChild(img);
    li.appendChild(p);
    ul3.appendChild(li);
    ul3.appendChild(liBack);
    ul2.appendChild(ul3);

    ul.appendChild(ul2);
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