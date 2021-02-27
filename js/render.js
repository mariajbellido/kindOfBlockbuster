// Crearemos tres funciones: 

// La primera se encargará de renderizar lo que hemos construido || función renderElement()
// La segunda se encargará de construir lo que se renderizará  a través de un template literal || función buildElement()
// La tercera se encargará de limpiar el template literal si tuviera algún texto base (para evitar repetición)
// La cuarta se encargará de iterar por todo el array de objetos para mostrar todos los disponibles. 

export function renderMovieListFromMap(list, map) {
  cleanMovieList()
  list.forEach(movieId => renderElement(map.get(movieId)))
}



function renderElement(movie) {
  const element = buildElement(movie);
  window.container.append(element);
}

function buildElement({title, poster_path, vote_average, id, recommended}) {
  const template = `
    <article class="movie ${recommended ? 'recommended' : '' }">
        <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="Poster paths">
        <p class="movie-title">${title}</p>
        <p class="movie-id">${id}</p>
        <span class="movie-rate">${vote_average}</span>
      </article>
  `
  const movie = document.createElement('div');
  movie.innerHTML = template;
  return movie.firstElementChild;
}

function cleanMovieList () {
  window.container.innerHTML = '';
}

export default function renderMovieList(list) {
  cleanMovieList()
  //console.table(list, ["title", "poster_path", "vote_average", "id"]);
  list.forEach(renderElement);
}