//import { filterDirector } from './dataFunctions.js';

export const renderItems = (data) => {
  //const ul2 = document.querySelector('#root')
  const ul = document.createElement("ul");
  data.forEach(
    (film) => {
        
      const img = document.createElement("img");
      img.setAttribute('itemprop', 'image')
      img.src = film.poster;
     
      const li = document.createElement("li");
      const p = document.createElement("p");

      li.setAttribute('class', 'pelicula')
      li.setAttribute('itemscope', '')
      li.setAttribute('itemtype', 'pelicula')
      li.setAttribute('itemprop', 'title')
      p.textContent = film.title;
      li.appendChild(img);
      li.appendChild(p);  
      
   
    
      ul.appendChild(li)
    });
  //console.log(ul2);
  return ul
  
};

export const forDirector = (data) => {
  const selectDirector = document.querySelector('[name="director"]')
  //selectDirector.innerHTML='';
  //const filteredData = filterDirector(data,select.value);

  data.forEach(
    (film) => {
      const optionDirector = document.createElement("option");

      optionDirector.setAttribute('value', film.director)
      optionDirector.textContent = film.director
        
      selectDirector.appendChild(optionDirector);
      
    });
  
  return selectDirector
  
};
export const forProducer = (data) => {
  const selectProducer = document.querySelector('[name="productor"]')


  data.forEach(
    (film) => {
      const optionProducer = document.createElement("option");

      optionProducer.setAttribute('value', film.producer)
      optionProducer.textContent = film.producer
        
      selectProducer.appendChild(optionProducer);
      
    });
  
  return selectProducer
  
};