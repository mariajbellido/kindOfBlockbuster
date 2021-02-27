import movies from './movies.js';
import render from './render.js';

// const search = document.getdocumentById("search-form");
// const search = document.querySelector("#search-form");

const search = window['search-form'] 
// Al tener un guión no podemos usar directamente "search-form" sin los corchetes y con el punto como si fuera window.search-form. 

search.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const query = formData.get('title');
  const movies = searchMovie(query);
  if (movies) {
    return render(movies)
  }
  return alert("No encontramos tu película")
})

function filterByTitle(title) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase());
  })
}


function findById(id) {
 return movies.find((movie) => {
    return movie.id === parseInt(id, 10);
  })
}

function searchMovie(query) {
  if (isNaN(query)) {
    return filterByTitle(query)
  }
  return [findById(query)];
}