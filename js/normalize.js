import rawMoviesList from './movies.js'


const movieList = rawMoviesList.reduce((list, movie) => {
  list.set(movie.id, movie)
  return list 
}, new Map())

//console.log(movieList)

//El resultado del console.log de movieList será un mapa con 40 elementos. Cada uno de ellos con una apariencia como sigue: 
/* Map(40)
[[Entries]]
0: {724989 => Object}
key: 724989
value: {popularity: 1616.326, vote_count: 18, video: false, poster_path: "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg", id: 724989, …}
1: {718444 => Object}
key: 718444
value:
adult: false
backdrop_path: "/x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg"
genre_ids: [28]
id: 718444
original_language: "en"
original_title: "Rogue"
overview: "Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels."
popularity: 1456.937
poster_path: "/zVncJzXzwIO15YM1WilqYn30r54.jpg"
release_date: "2020-08-20"
title: "Rogue"
video: false
vote_average: 6
vote_count: 159
__proto__: Object
*/




const all = rawMoviesList.map(movie => movie.id)
//console.log(all)

// En este console.log de (all) tendríamos un array con los 40 títulos 

/* [724989, 718444, 734309, 438396, 594328, 605116, 581392, 613504, 337401, 606234, 721452, 539885, 632618, 385103, 611395, 677638, 501979, 601165, 523849, 703134, 475430, 547016, 508570, 618354, 724717, 735110, 531499, 603119, 722603, 703771, 38700, 703745, 601844, 516486, 495764, 514207, 713825, 489326, 475557, 723072] */

// reduce() recibe como parámetros prevValue (valor previo, con el que inicializamos, actualValue, el actual y el index, de 0 a n elementos.

// En este ejemplo, el valor previo sería la lista completa de películas, mientras que movie, sería el valor actual 

const popular = rawMoviesList.reduce((list, movie) => { if(movie.vote_average > 7) {
  list.push(movie.id)
}

return list // Devolvemos la lista

}, []) // El array estará vacío en la primera vuelta, ya no en la segunda, aunque podría estarlo si no se dieran las condiciones para llenarlo. 

// console.log(popular)

// Un console.log(popular) devuelve un array con 15 películas con sus respectivos id's 

/*
[ 594328,
  581392,
  613504,
  337401,
  721452,
  385103,
  677638,
  547016,
  508570,
  618354,
  38700,
  516486,
  495764,
  514207,
  475557 ] */

const notPopular = rawMoviesList.reduce((list, movie) => {
  if(movie.vote_average <= 7) {
    list.push(movie.id)
  }
  return list
}, [])

//console.log(notPopular)

//En este caso, un console.log de (notPopular) daría como resultado un array de 25 películas/elementos que cumplen con la condición. 

/* 
[ 724989,
  718444,
  734309,
  438396,
  605116,
  606234,
  539885,
  632618,
  611395,
  501979,
  601165,
  523849,
  703134,
  475430,
  724717,
  735110,
  531499,
  603119,
  722603,
  703771,
  703745,
  601844,
  713825,
  489326,
  723072 ]
  */

  export {
    movieList,
    all,
    popular,
    notPopular
  }