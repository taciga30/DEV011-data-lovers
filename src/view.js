
export const renderItems = (data) => {
  const ul2 = document.querySelector('#root')
  const ul = document.createElement("ul");
  data.forEach(
    (film) => {
     
         
      const img = document.createElement("img");
      img.setAttribute('itemprop', 'image')
      img.src = film.poster;
     
      
      const li = document.createElement("li");
      const p = document.createElement("p");

      li.setAttribute('class', 'titulo_pelicula')
      li.setAttribute('itemscope', '')
      li.setAttribute('itemtype', 'pelicula')
      li.setAttribute('itemprop', 'title')
      p.textContent = film.title;
      li.appendChild(p);  
      li.appendChild(img);
   
    
      ul.appendChild(li)
    });
  console.log(ul2);
  return ul
  
};
